import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrmContactComponent} from './crm-contact.component';

const routes: Routes = [
  {
    path: '',
    component: CrmContactComponent,
    data: {
      title: 'CRM Contacts',
      icon: 'ti-users',
      caption: 'loursem it to no crm to dshil aksl ek se.',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmContactRoutingModule { }
