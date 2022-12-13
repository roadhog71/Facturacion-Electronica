import { TestBed } from '@angular/core/testing';

import { EfacturaService } from './efactura.service';

describe('EfacturaService', () => {
  let service: EfacturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EfacturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
