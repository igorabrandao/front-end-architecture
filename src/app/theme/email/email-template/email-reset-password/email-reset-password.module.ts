import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailResetPasswordComponent } from './email-reset-password.component';
import { EmailResetPasswordRoutingModule } from './email-reset-password-routing.module';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EmailResetPasswordRoutingModule,
    SharedModule
  ],
  declarations: [EmailResetPasswordComponent]
})
export class EmailResetPasswordModule { }
