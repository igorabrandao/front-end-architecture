import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmailRoutingModule} from './email-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EmailRoutingModule,
    SharedModule
  ],
  declarations: []
})
export class EmailModule { }
