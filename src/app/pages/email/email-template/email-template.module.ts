import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmailTemplateRoutingModule} from './email-template-routing.module';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EmailTemplateRoutingModule,
    SharedModule
  ],
  declarations: []
})
export class EmailTemplateModule { }
