In this folder, you have all the domain repositories implementations.

When you need to switch repository ( to use mocks for example ), you have to modify the providers part in the `<%= classify(name) %>Module` file as :
```ts
const PROVIDERS = [
  { provide: I<%= classify(name) %>Repository, useClass: <%= classify(name) %>HttpRepository }, // HttpExample
  // ------- OR ------
  { provide: I<%= classify(name) %>Repository, useClass: <%= classify(name) %>MockRepository }, // TODO remove mock
];
```
