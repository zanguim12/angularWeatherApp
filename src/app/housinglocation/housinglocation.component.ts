import { CardModule } from 'primeng/card';
import { Housinglocation } from './../housinglocation';
import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
@Component({
  selector: 'app-housinglocation',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    RouterModule,
    DetailsComponent,
  ],
  templateUrl: './housinglocation.component.html',
  styleUrl: './housinglocation.component.scss'
})
export class HousinglocationComponent {

  @Input() housingLocation!: Housinglocation;
}
