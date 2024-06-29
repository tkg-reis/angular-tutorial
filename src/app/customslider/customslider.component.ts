import { Component, HostBinding, HostListener, Input, booleanAttribute, numberAttribute } from '@angular/core';
import { CustomCardComponent } from '../custom-card/custom-card.component';

@Component({
  selector: 'app-customslider',
  standalone: true,
  imports: [
    CustomCardComponent
  ],
  template: `
    <app-custom-card>
      <h1>{{ value }}</h1>
    </app-custom-card>
  `,
  styleUrl: './customslider.component.scss',
  host: {
    'role': 'slider',
    '[attr.aria-valuenow]': 'value',
    '[tabIndex]': 'disabled ? -1 : 0',
    '(keydown)': 'updateValue($event)',
  },
})
export class CustomsliderComponent {
  // @Input({
  //   required : true,
  //   transform : UpperCase
  // }) value = "";
  // @Input({transform : booleanAttribute}) disabled = false;
  // @Input({transform : numberAttribute}) number = 0;
  @HostBinding('attr.aria-valuenow') value: number = 0;
  disabled: boolean = false;
  @HostBinding('tabIndex')
  getTabIndex() {
    return this.disabled ? -1 : 0;
  }

  @HostListener('keydown', ['$event'])
  updateValue(event: KeyboardEvent) {
    console.log(event.target)
  }
}

function UpperCase(value : string | undefined) {
  return value?.toUpperCase() ?? "";
}
