import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComingSoonComponent} from './coming-soon.component';

const routes: Routes = [
  {
    path: '',
    component: ComingSoonComponent,
    data: {
      title: 'Coming Soon'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComingSoonRoutingModule { }
