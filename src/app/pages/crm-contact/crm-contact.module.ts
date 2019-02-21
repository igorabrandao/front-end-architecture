import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmContactRoutingModule } from './crm-contact-routing.module';
import { CrmContactComponent } from './crm-contact.component';
import {SharedModule} from '../../shared/shared.module';
import {DataTableModule} from 'angular2-datatable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    CrmContactRoutingModule,
    SharedModule,
    HttpClientModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CrmContactComponent]
})
export class CrmContactModule { }
