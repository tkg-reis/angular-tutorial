import {Routes} from '@angular/router';
import {Sample01Component} from './sample01/sample01.component';
import {DetailsComponent} from './details/details.component';
import { CalculatorComponent } from './calculator/calculator.component';


const routeConfig: Routes = [
    {
      path: '',
      component: Sample01Component,
      title: 'Home page',
    },
    {
      path: 'cal',
      component: CalculatorComponent,
      title: 'Cal page',
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details',
    },
  ];
  export default routeConfig;