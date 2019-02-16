import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { AddressComponent } from './address/address.component';
import { ResultComponent } from './result/result.component';
import {NGXFormWizardComponent} from './ngx-wizard.component';

const routes: Routes = [
  {
    path: '',
     component: NGXFormWizardComponent,
    data: {
      title: 'ngx-wizard'
    },
    children: [
      {
        path: 'wizard',
        component: PersonalComponent,
        data: {
          title: 'Personal'
        }
      },
      {
        path: 'work',
        component: WorkComponent,
        data: {
          title: 'Work'
        }
      },
      {
        path: 'address',
        component: AddressComponent,
        data: {
          title: 'Address'
        }
      },
      {
        path: 'result',
        component: ResultComponent,
        data: {
          title: 'Result'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NGXWizardRoutingModule { }

export const routedComponents = [NGXFormWizardComponent];
