import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormMaskRoutingModule } from './form-mask-routing.module';
import { FormMaskComponent } from './form-mask.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/*import { InputMaskModule } from 'ng2-inputmask';*/
import { TextMaskModule } from 'angular2-text-mask';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  imports: [
    CommonModule,
    FormMaskRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    /*InputMaskModule,*/
    TextMaskModule,
    CurrencyMaskModule
  ],
  declarations: [FormMaskComponent]
})
export class FormMaskModule { }
