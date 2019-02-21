import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmailComposeComponent} from './email-compose.component';

const routes: Routes = [
  {
    path: '',
    component: EmailComposeComponent,
    data: {
      title: 'Compose Email',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - compose email',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailComposeRoutingModule { }
