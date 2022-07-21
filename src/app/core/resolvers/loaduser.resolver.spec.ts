import { TestBed } from '@angular/core/testing';

import { LoaduserResolver } from './loaduser.resolver';

describe('LoaduserResolver', () => {
  let resolver: LoaduserResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LoaduserResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
