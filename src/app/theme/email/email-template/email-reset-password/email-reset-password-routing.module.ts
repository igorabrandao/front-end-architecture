import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmailResetPasswordComponent} from './email-reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: EmailResetPasswordComponent,
    data: {
      title: 'Password Reset',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - password reset',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailResetPasswordRoutingModule { }
