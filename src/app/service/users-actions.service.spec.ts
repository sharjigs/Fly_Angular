import { TestBed } from '@angular/core/testing';

import { UsersActionsService } from './users-actions.service';

describe('UsersActionsService', () => {
  let service: UsersActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
