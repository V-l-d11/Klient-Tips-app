import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Employer } from 'src/app/models/users';

@Injectable({
  providedIn: 'root',
})
export class TipsPersonsDetailsDataService implements OnInit {
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

  constructor() {
    console.log(this.fakeDataEmplyers, 'Fake Data');
  }

  public getAllData() {
    return this.fakeDataEmplyers;
  }

  public searchEl(serachTerms: string): Employer[] {
    console.log(serachTerms, 'Service searchterms');
    const filterUsers = this.fakeDataEmplyers.filter(
      (user) =>
        user.firstName.toLowerCase().includes(serachTerms.toLowerCase()) ||
        user.lastName.toLowerCase().includes(serachTerms.toLowerCase())
    );
    console.log(filterUsers);
    return filterUsers;
  }

  public loadUserElement(id: number) {
    return this.fakeDataEmplyers.find((el) => el.id === id);
  }

  public updateTip(id: number, tip: number): void {
    const user = this.fakeDataEmplyers.find((el) => el.id === id);
    if (user) {
      user.tip = tip;
      this.tipSubject.next(tip);
    }
  }

  ngOnInit(): void {
    console.log(this.fakeDataEmplyers, 'Fake Data');
  }
}
