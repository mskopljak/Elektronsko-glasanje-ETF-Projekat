import { TestBed } from '@angular/core/testing';

import { RegcenService } from './regcen.service';

describe('RegcenService', () => {
  let service: RegcenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegcenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
