import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComingSoonRoutingModule } from './coming-soon-routing.module';
import { ComingSoonComponent } from './coming-soon.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ComingSoonRoutingModule,
    SharedModule
  ],
  declarations: [ComingSoonComponent]
})
export class ComingSoonModule { }
