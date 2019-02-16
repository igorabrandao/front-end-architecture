import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Error500Component} from './error-500.component';

const routes: Routes = [
  {
    path: '',
    component: Error500Component,
    data: {
      title: 'Error 500'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Error500RoutingModule { }
