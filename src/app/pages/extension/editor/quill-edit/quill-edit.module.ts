import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuillEditRoutingModule } from './quill-edit-routing.module';
import { QuillEditComponent } from './quill-edit.component';
import {SharedModule} from '../../../../shared/shared.module';
import {QuillEditorModule} from 'ngx-quill-editor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    QuillEditRoutingModule,
    SharedModule,
    QuillEditorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [QuillEditComponent]
})
export class QuillEditModule { }
