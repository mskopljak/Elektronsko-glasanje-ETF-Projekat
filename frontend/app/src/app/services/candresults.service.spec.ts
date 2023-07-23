import { TestBed } from '@angular/core/testing';

import { CandResultsService } from './candresults.service';

describe('CandResultsService', () => {
  let service: CandResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
