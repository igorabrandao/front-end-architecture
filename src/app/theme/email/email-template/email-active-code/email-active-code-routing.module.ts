import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmailActiveCodeComponent} from './email-active-code.component';

const routes: Routes = [
  {
    path: '',
    component: EmailActiveCodeComponent,
    data: {
      title: 'Activation Code',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - activation code',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailActiveCodeRoutingModule { }
