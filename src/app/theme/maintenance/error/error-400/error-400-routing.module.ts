import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Error400Component} from './error-400.component';

const routes: Routes = [
  {
    path: '',
    component: Error400Component,
    data: {
      title: 'Error 400'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Error400RoutingModule { }
