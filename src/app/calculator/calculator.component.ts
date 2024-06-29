import { Component, inject } from '@angular/core';
import { CalculatorServiceService } from '../calculator-service.service';
import { CustomsliderComponent } from '../customslider/customslider.component';
import { MycompComponent } from '../mycomp/mycomp.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    CustomsliderComponent,
    MycompComponent
  ],
  template : `
    <h1>the total is {{ cost }} .</h1>
    <app-customslider></app-customslider>
    <!-- <app-customslider [value]="Luigi" [disabled]="true" [number]="8"></app-customslider>  -->
    
  `,
  // templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  private calculatorService = inject(CalculatorServiceService);

  cost = this.calculatorService.add(100, 80);

  mario = "mario"
  Luigi = "Luigi"
}
