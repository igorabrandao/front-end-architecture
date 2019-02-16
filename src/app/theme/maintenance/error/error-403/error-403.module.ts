import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error403RoutingModule } from './error-403-routing.module';
import { Error403Component } from './error-403.component';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    Error403RoutingModule,
    SharedModule
  ],
  declarations: [Error403Component]
})
export class Error403Module { }
