import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Error404Component} from './error-404.component';

const routes: Routes = [
  {
    path: '',
    component: Error404Component,
    data: {
      title: 'Error 404'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Error404RoutingModule { }
