import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuillEditComponent} from './quill-edit.component';

const routes: Routes = [
  {
    path: '',
    component: QuillEditComponent,
    data: {
      title: 'Quill Editor',
      icon: 'icon-edit',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - quill editor',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuillEditRoutingModule { }
