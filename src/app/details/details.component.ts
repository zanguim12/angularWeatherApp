import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService)
  housingLocation: Housinglocation | undefined;

  constructor () {
      const housinglocationID = Number(this.route.snapshot.params['id']);
     this.housingLocation = this.housingService.getHousingLocationById(housinglocationID);
  }

}
