import { Component, inject } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousinglocationComponent } from '../housinglocation/housinglocation.component';
import { HousingService } from '../housing.service';
import { CardModule } from 'primeng/card';
import { DetailsComponent } from '../details/details.component';
import { WeatherComponent } from '../weather/weather.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HousinglocationComponent,
    CardModule,
    DetailsComponent,
    RouterModule,
    WeatherComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  housingLocationList: Housinglocation[] = [];
  filteredLocationList: Housinglocation[] = [];

  housingService: HousingService = inject (HousingService);

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: Housinglocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }

}
