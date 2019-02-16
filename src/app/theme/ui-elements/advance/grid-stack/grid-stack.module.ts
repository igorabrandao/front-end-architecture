import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridStackComponent } from './grid-stack.component';
import {GridStackRoutingModule} from './grid-stack-routing.module';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    GridStackRoutingModule,
    SharedModule
  ],
  declarations: [GridStackComponent]
})
export class GridStackModule { }
