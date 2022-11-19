import { Injectable } from '@angular/core';
import { I<%= classify(name) %>Repository } from '../../domain/repositories/<%= dasherize(name) %>.repository';


@Injectable()
export class <%= classify(name) %>MockRepository implements I<%= classify(name) %>Repository {
  constructor() {}
}
