import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OtherDatatableComponent} from './other-datatable.component';

const routes: Routes = [
  {
    path: '',
    component: OtherDatatableComponent,
    data: {
      title: 'Other Data Table',
      icon: 'icon-widgetized',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - other data table',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherDatatableRoutingModule { }
