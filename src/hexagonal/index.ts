import {
  normalize,
  strings,
  virtualFs,
  workspaces,
} from "@angular-devkit/core";
import {
  apply,
  chain,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  SchematicsException,
  template,
  Tree,
  url,
} from "@angular-devkit/schematics";

import { Schema } from "./schema";

function createHost(tree: Tree): workspaces.WorkspaceHost {
  return {
    async readFile(path: string): Promise<string> {
      const data = tree.read(path);
      if (!data) {
        throw new SchematicsException("File not found.");
      }
      return virtualFs.fileBufferToString(data);
    },
    async writeFile(path: string, data: string): Promise<void> {
      return tree.overwrite(path, data);
    },
    async isDirectory(path: string): Promise<boolean> {
      return !tree.exists(path) && tree.getDir(path).subfiles.length > 0;
    },
    async isFile(path: string): Promise<boolean> {
      return tree.exists(path);
    },
  };
}

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function hexagonal(options: Schema): Rule {
  return async (tree: Tree, _context: SchematicContext) => {
    const host = createHost(tree);
    const { workspace } = await workspaces.readWorkspace("/", host);
    const project =
      options.project != null ? workspace.projects.get(options.project) : null;
    if (!project) {
      throw new SchematicsException(`Invalid project name: ${options.project}`);
    }

    const projectType =
      project.extensions.projectType === "application" ? "app" : "lib";

    if (options.path === undefined) {
      options.path = `${project.sourceRoot}/${projectType}`;
    }

    const sourceTemplates = url("./files");
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ...options,
        ...strings,
        addExclamation,
      }),
      move(normalize(options.path as string)),
    ]);
    return chain([mergeWith(sourceParametrizedTemplates)]);
  };
}

// how to create funtion like classify() or dasherize()
function addExclamation(value: string): string {
  return value + "!";
}
