import { TestBed } from '@angular/core/testing';

import { ElectionlistGuard } from './electionlist.guard';

describe('ElectionlistGuard', () => {
  let guard: ElectionlistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ElectionlistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
