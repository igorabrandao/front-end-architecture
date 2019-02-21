import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error500RoutingModule } from './error-500-routing.module';
import { Error500Component } from './error-500.component';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    Error500RoutingModule,
    SharedModule
  ],
  declarations: [Error500Component]
})
export class Error500Module { }
