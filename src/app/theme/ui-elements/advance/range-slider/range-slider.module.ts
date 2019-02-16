import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeSliderComponent } from './range-slider.component';
import {RangeSliderRoutingModule} from './range-slider-routing.module';
import {SharedModule} from '../../../../shared/shared.module';
import {NouisliderModule} from 'ng2-nouislider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RangeSliderRoutingModule,
    SharedModule,
    NouisliderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RangeSliderComponent]
})
export class RangeSliderModule { }
