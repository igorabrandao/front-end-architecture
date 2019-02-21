import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Email Template',
      status: false
    },
    children: [
      {
        path: 'email-welcome',
        loadChildren: './email-welcome/email-welcome.module#EmailWelcomeModule'
      },
      {
        path: 'email-reset-password',
        loadChildren: './email-reset-password/email-reset-password.module#EmailResetPasswordModule'
      },
      {
        path: 'email-newsletter',
        loadChildren: './email-newsletter/email-newsletter.module#EmailNewsletterModule'
      },
      {
        path: 'app-launch',
        loadChildren: './email-app-launch/email-app-launch.module#EmailAppLaunchModule'
      },
      {
        path: 'activation-code',
        loadChildren: './email-active-code/email-active-code.module#EmailActiveCodeModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailTemplateRoutingModule { }
