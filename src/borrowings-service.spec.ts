import { TestBed } from '@angular/core/testing';

import { BorrowingsServiceService } from './borrowings-service.service';

describe('BorrowingsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BorrowingsServiceService = TestBed.get(BorrowingsServiceService);
    expect(service).toBeTruthy();
  });
});
