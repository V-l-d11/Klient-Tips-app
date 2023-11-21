import { TestBed } from '@angular/core/testing';

import { TipsPersonsDetailsDataService } from './tips-persons-details-data.service';

describe('TipsPersonsDetailsDataService', () => {
  let service: TipsPersonsDetailsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipsPersonsDetailsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
