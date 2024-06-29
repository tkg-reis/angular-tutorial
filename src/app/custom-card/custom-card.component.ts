import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  standalone: true,
  imports: [],
  template: `
    <div class="card_shadow">
      <ng-content/>
    </div>
  `,
  styleUrl: './custom-card.component.scss'
})
export class CustomCardComponent {

}
