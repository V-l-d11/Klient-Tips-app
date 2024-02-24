import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TipsPersonsDetailsDataService } from './tips-persons-details-data.service';
import { ServerEmployee, Employer } from 'src/app/models/users';
import { Restaurant } from 'src/app/models/users';
import { BehaviorSubject } from 'rxjs';

describe('TipsPersonsDetailsDataService', () => {
  let service: TipsPersonsDetailsDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TipsPersonsDetailsDataService]
    });
    service = TestBed.inject(TipsPersonsDetailsDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch restaurants list from server', () => {
    const dummyResponse: { restaurants: Restaurant[] } = { 
      restaurants: [
        { id: 1, name: 'Restaurant 1', description: 'Description 1', address: 'Address 1', logo_url: 'Logo URL 1', employees: 'Employees 1' },
        { id: 2, name: 'Restaurant 2', description: 'Description 2', address: 'Address 2', logo_url: 'Logo URL 2', employees: 'Employees 2' }
      ]
    };

    service.getRestaurats().subscribe(response => {
      expect(response).toEqual(dummyResponse);
    });

    const req = httpMock.expectOne(service['URL_HEROKU_RESTAURANT_LIST']);
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });

  it('should handle error and return Observable with error', () => {
    const errorMessage = 'Test error message';

    service.getRestaurats().subscribe({
      error: (error) => {
        expect(error).toBeTruthy();
        
      }
    });

    const req = httpMock.expectOne(service['URL_HEROKU_RESTAURANT_LIST']);
    expect(req.request.method).toBe('GET');
    req.error(new ErrorEvent('Test error', { message: errorMessage }));

    // Проверяем, что catchError возвращает Observable с ошибкой
    expect(service.getRestaurats()).toBeTruthy();
  });

  it('should fetch user data from server', () => {
    const dummyResponse: { employees: ServerEmployee[] } = { 
      employees: [
        { id: 1, first_name: 'John', last_name: 'Doe', position: 'Position 1', image_url: 'Image URL 1' },
        { id: 2, first_name: 'Jane', last_name: 'Doe', position: 'Position 2', image_url: 'Image URL 2' }
      ]
    };

    const restaurantId = 1;
    service.getData(restaurantId).subscribe(response => {
      expect(response).toEqual(dummyResponse);
    });

    const req = httpMock.expectOne(`https://ipz-backend-a4ee9065f318.herokuapp.com/api/public/restaurants/${restaurantId}/employees`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });

  it('should return an Observable', () => {
    const observable = service.getRestaurantListObservable();
    expect(observable).toBeDefined();
    expect(observable.subscribe).toBeDefined();
    expect(typeof observable.subscribe).toEqual('function');
  });

  it('should return an Observable of type Employer | null', () => {
    const userId = 1;
    const observable = service.loadUserElement(userId);
    expect(observable).toBeDefined();
    expect(observable.subscribe).toBeDefined();
    expect(typeof observable.subscribe).toEqual('function');

    observable.subscribe(user => {
      if (user) {
        expect(user.id).toEqual(userId);
      } else {
        expect(user).toBeNull();
      }
    });

  });

  it('should return an Observable of type Employer[]', () => {
    const searchTerm = 'John';
    const observable = service.searchUser(searchTerm);
    expect(observable).toBeDefined();
    expect(observable.subscribe).toBeDefined();
    expect(typeof observable.subscribe).toEqual('function');

    observable.subscribe(users => {
      expect(Array.isArray(users)).toBeTruthy();
      if (users.length > 0) {
        const user = users[0];
        expect(user.firstName.toLowerCase()).toContain(searchTerm.toLowerCase());
        
      }
    });
  });

  it('should handle error and return Observable with error', () => {
    const id = 1;
    const errorMessage = 'Test error message';
  
    service.getData(id).subscribe({
      error: (error) => {
        expect(error).toBeTruthy();
      }
    });
  
    const req = httpMock.expectOne(`https://ipz-backend-a4ee9065f318.herokuapp.com/api/public/restaurants/${id}/employees`);
    expect(req.request.method).toBe('GET');
  
    // Эмулируем ошибку в запросе
    req.error(new ErrorEvent('Test error', { message: errorMessage }));
  
    // Проверяем, что catchError возвращает Observable с ошибкой
    expect(service.getData(id)).toBeTruthy();
  });

  it('should log error if response format is invalid', () => {
    const id = 1;
    spyOn(console, 'error');

    service.getData(id).subscribe();

    const req = httpMock.expectOne(`https://ipz-backend-a4ee9065f318.herokuapp.com/api/public/restaurants/${id}/employees`);
    expect(req.request.method).toBe('GET');
    req.flush({}); // Ответ сервера без свойства "employees"

    expect(console.error).toHaveBeenCalledWith('Invalid response format. Expected an "employees" property with an array.');
  });

});
