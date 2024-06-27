import {Routes} from '@angular/router';
import {Sample01Component} from './sample01/sample01.component';
import {DetailsComponent} from './details/details.component';

const routeConfig: Routes = [
    {
      path: '',
      component: Sample01Component,
      title: 'Home page',
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details',
    },
  ];
  export default routeConfig;