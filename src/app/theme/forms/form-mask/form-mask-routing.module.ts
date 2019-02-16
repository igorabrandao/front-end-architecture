import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormMaskComponent} from './form-mask.component';

const routes: Routes = [
  {
    path: '',
    component: FormMaskComponent,
    data: {
      title: 'Form Mask',
      icon: 'icon-pencil-alt',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - form mask',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormMaskRoutingModule { }
