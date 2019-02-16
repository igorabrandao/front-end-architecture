import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailAppLaunchComponent } from './email-app-launch.component';
import {EmailAppLaunchRoutingModule} from './email-app-launch-routing.module';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EmailAppLaunchRoutingModule,
    SharedModule
  ],
  declarations: [EmailAppLaunchComponent]
})
export class EmailAppLaunchModule { }
