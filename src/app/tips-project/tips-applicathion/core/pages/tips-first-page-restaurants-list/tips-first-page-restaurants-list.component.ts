import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Restaurant } from 'src/app/models/users';
import { TipsPersonsDetailsDataService } from '../../services/tips-persons-details-data/tips-persons-details-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tips-first-page-restaurants-list',
  templateUrl: './tips-first-page-restaurants-list.component.html',
  styleUrls: ['./tips-first-page-restaurants-list.component.scss'],
})
export class TipsFirstPageRestaurantsListComponent implements OnInit {
  restaurants$!: Observable<Restaurant[]>;
  filteredRestaurants$!: Observable<Restaurant[]>;
  searchTerm: string = '';

  constructor(
    private restaurantService: TipsPersonsDetailsDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.restaurantService.getRestaurats().subscribe(() => {
      console.log('Restaurants loaded successfully');
    });

    this.restaurants$ = this.restaurantService
      .getRestaurantListObservable()
      .pipe(
        catchError((error) => {
          console.error('Error', error);
          return of([]);
        })
      );

    this.applyFilter();
  }

  onSearch() {
    this.applyFilter();
  }

  applyFilter() {
    this.filteredRestaurants$ = this.restaurants$.pipe(
      map((restaurants) =>
        restaurants.filter((restaurant) =>
          restaurant.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      )
    );
  }

  redirectToEmployeeListRestaurent(el: Restaurant) {
    const elId = el.id;
    this.router.navigate(['restaurant', elId]);
  }
}
