import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Error503Component} from './error-503.component';

const routes: Routes = [
  {
    path: '',
    component: Error503Component,
    data: {
      title: 'Error 503'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Error503RoutingModule { }
