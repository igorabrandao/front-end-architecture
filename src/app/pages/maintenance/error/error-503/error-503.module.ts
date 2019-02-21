import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error503RoutingModule } from './error-503-routing.module';
import { Error503Component } from './error-503.component';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    Error503RoutingModule,
    SharedModule
  ],
  declarations: [Error503Component]
})
export class Error503Module { }
