import { TestBed } from '@angular/core/testing';

import { ReginalcenterService } from './reginalcenter.service';

describe('ReginalcenterService', () => {
  let service: ReginalcenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReginalcenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
