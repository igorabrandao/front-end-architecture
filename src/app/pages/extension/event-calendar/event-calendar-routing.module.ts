import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventCalendarComponent} from './event-calendar.component';

const routes: Routes = [
  {
    path: '',
    component: EventCalendarComponent,
    data: {
      title: 'Event Calendar',
      icon: 'icon-calendar',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - event calendar',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventCalendarRoutingModule { }
