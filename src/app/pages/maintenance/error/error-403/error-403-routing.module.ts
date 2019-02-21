import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Error403Component} from './error-403.component';

const routes: Routes = [
  {
    path: '',
    component: Error403Component,
    data: {
      title: 'Error 403'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Error403RoutingModule { }
