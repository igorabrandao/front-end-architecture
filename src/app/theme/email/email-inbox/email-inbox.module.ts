import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailInboxComponent } from './email-inbox.component';
import {EmailInboxRoutingModule} from './email-inbox-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { EMainComponent } from './e-main/e-main.component';
import { EStarredComponent } from './e-starred/e-starred.component';
import { EDraftsComponent } from './e-drafts/e-drafts.component';
import { ESentComponent } from './e-sent/e-sent.component';
import { ETrashComponent } from './e-trash/e-trash.component';

@NgModule({
  imports: [
    CommonModule,
    EmailInboxRoutingModule,
    SharedModule
  ],
  declarations: [EmailInboxComponent, EMainComponent, EStarredComponent, EDraftsComponent, ESentComponent, ETrashComponent]
})
export class EmailInboxModule { }
