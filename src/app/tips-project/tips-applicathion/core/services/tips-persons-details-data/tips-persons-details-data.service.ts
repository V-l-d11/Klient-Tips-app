import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  catchError,
  map,
  startWith,
  take,
  tap,
  throwError,
} from 'rxjs';
import {
  Employer,
  NewTip,
  ServerEmployee,
  mapServeToClient,
  Restaurant,
} from 'src/app/models/users';
@Injectable({
  providedIn: 'root',
})
export class TipsPersonsDetailsDataService implements OnInit {
  realData$!: Observable<Employer>;
  private DateFromServerSubject = new BehaviorSubject<Employer[]>([]);
  public DateFromServer$: Observable<Employer[]> =
    this.DateFromServerSubject.asObservable();

  private restaurantListSubject: BehaviorSubject<Restaurant[]> =
    new BehaviorSubject<Restaurant[]>([]);

  private tipSubject = new Subject<number>();
  tip$ = this.tipSubject.asObservable();

  private readonly URL_HEROKU_RESTAURANT_LIST: string =
    'https://ipz-backend-a4ee9065f318.herokuapp.com/api/public/restaurants';

  private readonly URL_HEROKU_POST_TIP: string =
    'https://ipz-backend-a4ee9065f318.herokuapp.com//api/public/tips';

  constructor(private http: HttpClient) {}

  public getRestaurats(): Observable<{ restaurants: Restaurant[] }> {
    return this.http
      .get<{ restaurants: Restaurant[] }>(this.URL_HEROKU_RESTAURANT_LIST)
      .pipe(
        catchError((error) => {
          console.error('Error', error);
          return throwError(error);
        }),
        tap((response) => {
          if (response && response.restaurants) {
            const restaurantList = response.restaurants;
            this.restaurantListSubject.next(restaurantList);
          }
        })
      );
  }

  getRestaurantListObservable() {
    return this.restaurantListSubject.asObservable();
  }

  public getData(id: number) {
    console.log('id', id);
    return this.http
      .get<{ employees: ServerEmployee[] }>(
        `https://ipz-backend-a4ee9065f318.herokuapp.com/api/public/restaurants/${id}/employees`
      )
      .pipe(
        catchError((error) => {
          console.error('Error occurred', error);
          return throwError(error);
        }),
        tap((response) => {
          if (response && response.employees) {
            const clientData = response.employees.map((data: ServerEmployee) =>
              mapServeToClient(data)
            );
            this.DateFromServerSubject.next(clientData);
          } else {
            console.error(
              'Invalid response format. Expected an "employees" property with an array.'
            );
          }
        })
      );
  }

  public searchUser(searchTerm: string): Observable<Employer[]> {
    return this.DateFromServerSubject.pipe(
      take(1),
      map((currentData) => {
        if (!searchTerm.trim()) {
          return currentData || [];
        }

        return currentData
          ? currentData.filter(
              (user) =>
                user.firstName
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
            )
          : [];
      }),
      startWith([])
    );
  }

  public loadUserElement(id: number): Observable<Employer | null> {
    return this.DateFromServerSubject.pipe(
      take(1),
      map((currentData) =>
        currentData ? currentData.find((el) => el.id === id) || null : null
      )
    );
  }

  ngOnInit(): void {}
}
