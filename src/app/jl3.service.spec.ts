import { TestBed } from '@angular/core/testing';

import { Jl3Service } from './jl3.service';

describe('Jl3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Jl3Service = TestBed.get(Jl3Service);
    expect(service).toBeTruthy();
  });
});
