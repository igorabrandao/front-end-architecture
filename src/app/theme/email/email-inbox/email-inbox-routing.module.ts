import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmailInboxComponent} from './email-inbox.component';
import {PersonalComponent} from '../../forms/ngx-wizard/personal/personal.component';
import {EMainComponent} from './e-main/e-main.component';
import {EStarredComponent} from './e-starred/e-starred.component';
import {EDraftsComponent} from './e-drafts/e-drafts.component';
import {ESentComponent} from './e-sent/e-sent.component';
import {ETrashComponent} from './e-trash/e-trash.component';

const routes: Routes = [
  {
    path: '',
    component: EmailInboxComponent,
    data: {
      title: 'Inbox',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - inbox',
      status: true
    },
    children: [
      {
        path: 'e-main',
        component: EMainComponent,
        data: {
          title: 'Inbox'
        }
      },
      {
        path: 'e-starred',
        component: EStarredComponent,
        data: {
          title: 'Starred'
        }
      },
      {
        path: 'e-drafts',
        component: EDraftsComponent,
        data: {
          title: 'Drafts'
        }
      },
      {
        path: 'e-sent',
        component: ESentComponent,
        data: {
          title: 'Sent'
        }
      },
      {
        path: 'e-trash',
        component: ETrashComponent,
        data: {
          title: 'Trash'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailInboxRoutingModule { }
