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

  ngOnInit(): void {}
}
