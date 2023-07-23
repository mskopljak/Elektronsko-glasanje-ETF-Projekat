import { TestBed } from '@angular/core/testing';

import { CandidatelistGuard } from './candidatelist.guard';

describe('CandidatelistGuard', () => {
  let guard: CandidatelistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandidatelistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
