import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { <%= classify(name) %>Service } from './domain/services/<%= dasherize(name) %>.service';
import { I<%= classify(name) %>Service } from './domain/ports/<%= dasherize(name) %>.port';
import { <%= classify(name) %>MockRepository } from './infrastructure/repositories/<%= dasherize(name) %>-mock-repository.service';
import { I<%= classify(name) %>Repository } from './domain/repositories/<%= dasherize(name) %>.repository';

const COMPONENTS = [];
const PROVIDERS = [
  { provide: I<%= classify(name) %>Service, useClass: <%= classify(name) %>Service },
  { provide: I<%= classify(name) %>Repository, useClass: <%= classify(name) %>MockRepository }, // TODO remove mock
];

@NgModule({
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  imports: [CommonModule],
  providers: [PROVIDERS],
})
export class <%= classify(name) %>Module {}
