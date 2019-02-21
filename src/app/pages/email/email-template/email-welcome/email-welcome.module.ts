import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailWelcomeComponent } from './email-welcome.component';
import {EmailWelcomeRoutingModule} from './email-welcome-routing.module';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EmailWelcomeRoutingModule,
    SharedModule
  ],
  declarations: [EmailWelcomeComponent]
})
export class EmailWelcomeModule { }
