import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppToDoListReadDirective, AppToDoListRemoveDirective, DefaultComponent} from './default.component';
import {DefaultRoutingModule} from './default-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
/*import {SimpleNotificationsModule} from 'angular2-notifications';*/
import {AgmCoreModule} from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    DefaultRoutingModule,
    SharedModule,
    ChartModule,
    /*SimpleNotificationsModule.forRoot(),*/
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk'})
  ],
  declarations: [
    DefaultComponent,
    AppToDoListReadDirective,
    AppToDoListRemoveDirective,
  ],
  bootstrap: [DefaultComponent]
})
export class DefaultModule { }
