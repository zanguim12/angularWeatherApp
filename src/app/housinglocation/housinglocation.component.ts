import { Housinglocation } from './../housinglocation';
import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-housinglocation',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './housinglocation.component.html',
  styleUrl: './housinglocation.component.scss'
})
export class HousinglocationComponent {

  @Input() housingLocation!: Housinglocation;

}
