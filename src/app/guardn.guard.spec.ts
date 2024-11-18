import { TestBed } from '@angular/core/testing';

import { GuardnGuard } from './guardn.guard';

describe('GuardnGuard', () => {
  let guard: GuardnGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardnGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
