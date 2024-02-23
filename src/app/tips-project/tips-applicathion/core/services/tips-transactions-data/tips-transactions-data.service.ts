import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TipsTransactionsDataService {
  private readonly URL_HEROKU_POST_TIP: string =
    'https://ipz-backend-a4ee9065f318.herokuapp.com/api/public/tips';

  private dataSubject: BehaviorSubject<any> = new BehaviorSubject<any>({});
  private changedTipBox: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) {
    this.dataSubject.subscribe((data) => {
      console.log('Update data', data);
    });
  }

  setChangeBox(data: any): void {
    const currentData = this.changedTipBox.getValue();
    this.changedTipBox.next({ ...currentData, ...data });
  }

  getChangeBoxInput() {
    return this.changedTipBox.asObservable();
  }

  setTipData(data: any): void {
    const currentData = this.dataSubject.getValue();
    this.dataSubject.next({ ...currentData, ...data });
  }

  getTipData(): Observable<any> {
    return this.dataSubject.asObservable();
  }

  payTip(): Observable<any> {
    const postData = this.dataSubject.getValue();
    return this.http
      .post<any>(this.URL_HEROKU_POST_TIP, { tip: postData })
      .pipe(
        catchError((error) => {
          console.error('Error', error);
          return throwError(error);
        })
      );
  }
}
