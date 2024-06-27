import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, RouterOutlet} from '@angular/router';

export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    RouterModule
  ],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
    </section>
    <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
  `,
  // templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss'
})

export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
