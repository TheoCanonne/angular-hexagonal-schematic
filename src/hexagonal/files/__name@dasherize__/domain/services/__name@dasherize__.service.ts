import { Inject, Injectable } from '@angular/core';
import { I<%= classify(name) %>Repository } from '../repositories/<%= dasherize(name) %>.repository';
import { I<%= classify(name) %>Service } from '../ports/<%= dasherize(name) %>.port';

@Injectable()
export class <%= classify(name) %>Service implements I<%= classify(name) %>Service {
  constructor(
    private _<%= classify(name) %>Repository: I<%= classify(name) %>Repository
  ) {}
}
