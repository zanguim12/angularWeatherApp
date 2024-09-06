import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailsComponent } from './details/details.component';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
  {
    path: 'weather',
    component: WeatherComponent,
    title: 'weather',
  },
];
