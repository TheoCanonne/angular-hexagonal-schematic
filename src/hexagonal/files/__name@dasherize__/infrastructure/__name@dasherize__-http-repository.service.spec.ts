import { TestBed } from '@angular/core/testing';

import { <%= classify(name) %>HttpRepository } from './<%= dasherize(name) %>-http-repository.service';

describe('<%= classify(name) %>HttpRepository', () => {
  let service: <%= classify(name) %>HttpRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(<%= classify(name) %>HttpRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
