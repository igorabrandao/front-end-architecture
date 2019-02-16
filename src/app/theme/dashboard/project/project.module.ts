import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppToDoListReadDirective, AppToDoListRemoveDirective, ProjectComponent} from './project.component';
import {ProjectRoutingModule} from './project-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    SharedModule,
    ChartModule
  ],
  declarations: [
    ProjectComponent,
    AppToDoListReadDirective,
    AppToDoListRemoveDirective
  ]
})
export class ProjectModule { }
