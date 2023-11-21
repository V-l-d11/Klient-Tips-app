import { TestBed } from '@angular/core/testing';

import { TipsTransactionsDataService } from './tips-transactions-data.service';

describe('TipsTransactionsDataService', () => {
  let service: TipsTransactionsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipsTransactionsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
