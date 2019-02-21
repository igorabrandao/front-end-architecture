import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSelectComponent } from './form-select.component';
import {FormSelectRoutingModule} from './form-select-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {SelectModule} from 'ng-select';
import {TagInputModule} from 'ngx-chips';
import {SelectOptionService} from '../../../shared/elements/select-option.service';

@NgModule({
  imports: [
    CommonModule,
    FormSelectRoutingModule,
    SharedModule,
    FormsModule,
    SelectModule,
    TagInputModule
  ],
  declarations: [FormSelectComponent],
  providers: [SelectOptionService]
})
export class FormSelectModule { }
