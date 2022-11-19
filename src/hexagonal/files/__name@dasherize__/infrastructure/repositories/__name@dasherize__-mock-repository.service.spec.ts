import { TestBed } from '@angular/core/testing';

import { <%= classify(name) %>MockRepository } from './<%= dasherize(name) %>-mock-repository.service';

describe('<%= classify(name) %>MockRepository', () => {
  let service: <%= classify(name) %>MockRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(<%= classify(name) %>MockRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
