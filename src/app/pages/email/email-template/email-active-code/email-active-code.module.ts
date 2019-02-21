import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailActiveCodeComponent } from './email-active-code.component';
import {EmailActiveCodeRoutingModule} from './email-active-code-routing.module';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EmailActiveCodeRoutingModule,
    SharedModule
  ],
  declarations: [EmailActiveCodeComponent]
})
export class EmailActiveCodeModule { }
