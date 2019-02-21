import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { NGXFormWizardComponent } from './ngx-wizard.component';
import { NavbarComponent } from './navbar/navbar.component';

import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { AddressComponent } from './address/address.component';
import { ResultComponent } from './result/result.component';

import { FormDataService } from './data/formData.service';
import { WorkflowService } from './workflow/workflow.service';
import {SharedModule} from '../../../shared/shared.module';
import {CommonModule} from '@angular/common';
import {NGXWizardRoutingModule} from './ngx-wizard-routing.module';


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      NGXWizardRoutingModule,
      SharedModule
    ],
    providers: [{ provide: FormDataService, useClass: FormDataService },
    { provide: WorkflowService, useClass: WorkflowService }],
    declarations: [NGXFormWizardComponent, NavbarComponent, PersonalComponent, WorkComponent, AddressComponent, ResultComponent],
    bootstrap: [NGXFormWizardComponent]

})

export class NGXFormWizardModule { }
