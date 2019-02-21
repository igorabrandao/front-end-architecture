import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailNewsletterComponent } from './email-newsletter.component';
import {EmailNewsletterRoutingModule} from './email-newsletter-routing.module';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EmailNewsletterRoutingModule,
    SharedModule
  ],
  declarations: [EmailNewsletterComponent]
})
export class EmailNewsletterModule { }
