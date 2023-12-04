import { HttpClient, HttpHeaders } from '@angular/common/http';
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
} from 'src/app/models/users';
@Injectable({
  providedIn: 'root',
})
export class TipsPersonsDetailsDataService implements OnInit {
  realData$!: Observable<Employer>;
  private DateFromServerSubject = new BehaviorSubject<Employer[]>([]);
  public DateFromServer$: Observable<Employer[]> =
    this.DateFromServerSubject.asObservable();

  // newTipObject: NewTip = {
  //   restaurant_id: 0,
  // };
  //private newTip = new BehaviorSubject<NewTip>(this.newTipObject);

  fakeDataEmplyers: Employer[] = [
    {
      id: 1,
      firstName: 'Vlad',
      lastName: 'Bertsel',
      email: 'vlad@bk.ru',
      tip: 0,
      img: './../../../assets/img/img/userMock.png',
    },
    {
      id: 2,
      firstName: 'Bochdan',
      lastName: 'Makurin',
      email: 'vlad@bk.ru',
      tip: 0,
      img: './../../../assets/img/img/userMock.png',
    },
    {
      id: 3,
      firstName: 'Sasza',
      lastName: 'Alex',
      email: 'vlad@bk.ru',
      tip: 0,
      img: './../../../assets/img/img/userMock.png',
    },
    {
      id: 4,
      firstName: 'Eva',
      lastName: 'Bertsed',
      email: 'vlad@bk.ru',
      tip: 0,
      img: './../../../assets/img/img/userMock.png',
    },
    {
      id: 5,
      firstName: 'Timur',
      lastName: 'Alox',
      email: 'vlad@bk.ru',
      tip: 0,
      img: './../../../assets/img/img/userMock.png',
    },
    {
      id: 6,
      firstName: 'Nikita',
      lastName: 'Valera',
      email: 'vlad@bk.ru',
      tip: 0,
      img: './../../../assets/img/img/userMock.png',
    },
    {
      id: 7,
      firstName: 'Vadilen',
      lastName: 'Minin',
      email: 'vlad@bk.ru',
      tip: 0,
      img: './../../../assets/img/img/userMock.png',
    },
  ];
  private tipSubject = new Subject<number>();
  tip$ = this.tipSubject.asObservable();
  private readonly TIPS_URL: string = '/api/public/restaurants/1/employees';
  private readonly POST_TIPS_URL: string = '/api/public/tips';
  constructor(private http: HttpClient) {}

  public getData() {
    return this.http.get<{ employees: ServerEmployee[] }>(this.TIPS_URL).pipe(
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
  public updateTip(id: number, tip: number): void {
    // this.newTipObject.restaurant_id = 1;
    // this.newTipObject.employee_id = id;
    // this.newTipObject.currency = 'pln';
    // this.newTipObject.payment_method = 'card';
    // this.newTipObject.amount = tip;

    //   console.log(this.newTipObject, 'This new tips object');

    const user = this.fakeDataEmplyers.find((el) => el.id === id);
    if (user) {
      user.tip = tip;
      this.tipSubject.next(tip);
    }
  }

  public postTipValue(tipData: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.POST_TIPS_URL, tipData, { headers });
  }

  ngOnInit(): void {}
}
