import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmailWelcomeComponent} from './email-welcome.component';

const routes: Routes = [
  {
    path: '',
    component: EmailWelcomeComponent,
    data: {
      title: 'Welcome Mail',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - welcome mail',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailWelcomeRoutingModule { }
