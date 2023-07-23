import { TestBed } from '@angular/core/testing';

import { MemberslistService } from './memberslist.service';

describe('MemberslistService', () => {
  let service: MemberslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
