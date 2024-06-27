import { Component } from '@angular/core';
import { Sample01Component } from './sample01/sample01.component';
import {HousingLocation} from './housing-location/housing-location.component';
// import { RouterOutlet } from '@angular/router';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Sample01Component,
    RouterModule
  ],
  template : `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <p>home</p>
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  // templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'sample word';
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';

  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
