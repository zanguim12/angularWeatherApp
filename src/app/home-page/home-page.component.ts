import { Component, inject } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousinglocationComponent } from '../housinglocation/housinglocation.component';
import { HousingService } from '../housing.service';
import { CardModule } from 'primeng/card';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HousinglocationComponent,
    CardModule,
    DetailsComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  housingLocationList: Housinglocation[] = []
  housingService: HousingService = inject (HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
