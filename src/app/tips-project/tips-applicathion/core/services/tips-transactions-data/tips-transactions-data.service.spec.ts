import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TipsTransactionsDataService } from './tips-transactions-data.service';

describe('TipsTransactionsDataService', () => {
  let service: TipsTransactionsDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TipsTransactionsDataService]
    });
    service = TestBed.inject(TipsTransactionsDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get change box input', () => {
    const testData = { exampleData: 'test' };
    service.setChangeBox(testData);
    service.getChangeBoxInput().subscribe(data => {
      expect(data).toEqual(testData);
    });
  });

  it('should set and get tip data', () => {
    const testData = { exampleData: 'test' };
    service.setTipData(testData);
    service.getTipData().subscribe(data => {
      expect(data).toEqual(testData);
    });
  });

  it('should send tip data to server', () => {
    const testData = { exampleData: 'test' };
    service.setTipData(testData);
    service.payTip().subscribe(response => {
      expect(response).toBeTruthy(); // Modify this based on your response expectation
    });

    const req = httpMock.expectOne(service['URL_HEROKU_POST_TIP']);
    expect(req.request.method).toBe('POST');
    expect(req.request.body.tip).toEqual(testData);

    req.flush({}); // Modify this based on your mock response
  });
});
