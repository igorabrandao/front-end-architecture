import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormWizardsComponent } from './form-wizards.component';
import {FormWizardsRoutingModule} from './form-wizards-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {ArchwizardModule} from 'ng2-archwizard/dist';
import { WizardBasicComponent } from './wizard-basic/wizard-basic.component';
import { WizardNavbarLgComponent } from './wizard-navbar-lg/wizard-navbar-lg.component';
import { WizardNavbarLgIconComponent } from './wizard-navbar-lg-icon/wizard-navbar-lg-icon.component';
import { WizardCustomComponent } from './wizard-custom/wizard-custom.component';
import { WizardNavbarLeftComponent } from './wizard-navbar-left/wizard-navbar-left.component';
import { WizardNavbarRightComponent } from './wizard-navbar-right/wizard-navbar-right.component';

@NgModule({
  imports: [
    CommonModule,
    FormWizardsRoutingModule,
    SharedModule,
    ArchwizardModule
  ],
  declarations: [
    FormWizardsComponent,
    WizardBasicComponent,
    WizardNavbarLgComponent,
    WizardNavbarLgIconComponent,
    WizardCustomComponent,
    WizardNavbarLeftComponent,
    WizardNavbarRightComponent
  ]
})
export class FormWizardsModule { }
