import { Injectable, OnInit } from '@angular/core';
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
      img: './../../../assets/img/img/userMock.png',
    },
    {
      id: 2,
      firstName: 'Bochdan',
      lastName: 'Makurin',
      email: 'vlad@bk.ru',
      img: './../../../assets/img/img/userMock.png',
    },
    {
      id: 3,
      firstName: 'Sasza',
      lastName: 'Alex',
      email: 'vlad@bk.ru',
      img: './../../../assets/img/img/userMock.png',
    },
    {
      id: 4,
      firstName: 'Eva',
      lastName: 'Bertsed',
      email: 'vlad@bk.ru',
      img: './../../../assets/img/img/userMock.png',
    },
    {
      id: 5,
      firstName: 'Timur',
      lastName: 'Alox',
      email: 'vlad@bk.ru',
      img: './../../../assets/img/img/userMock.png',
    },
    {
      id: 6,
      firstName: 'Nikita',
      lastName: 'Valera',
      email: 'vlad@bk.ru',
      img: './../../../assets/img/img/userMock.png',
    },
    {
      id: 7,
      firstName: 'Vadilen',
      lastName: 'Minin',
      email: 'vlad@bk.ru',
      img: './../../../assets/img/img/userMock.png',
    },
  ];

  constructor() {}
  public getAllData() {
    return this.fakeDataEmplyers;
  }
  public findOneELement(id: number) {
    return this.fakeDataEmplyers.find((el) => el.id === id);
  }
  ngOnInit(): void {}
}