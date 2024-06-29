import { Injectable, input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorServiceService {
  constructor() { }
  // @input() value = 0;

  add(x : number, y : number) {
    return x + y;
  }
}
