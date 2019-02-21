import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailReadComponent } from './email-read.component';
import {EmailReadRoutingModule} from './email-read-routing.module';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EmailReadRoutingModule,
    SharedModule
  ],
  declarations: [EmailReadComponent]
})
export class EmailReadModule { }
