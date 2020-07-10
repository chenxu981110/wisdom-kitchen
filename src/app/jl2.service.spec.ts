import { TestBed } from '@angular/core/testing';

import { Jl2Service } from './jl2.service';

describe('Jl2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Jl2Service = TestBed.get(Jl2Service);
    expect(service).toBeTruthy();
  });
});
