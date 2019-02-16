import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmailNewsletterComponent} from './email-newsletter.component';

const routes: Routes = [
  {
    path: '',
    component: EmailNewsletterComponent,
    data: {
      title: 'Newsletter Email',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - newsletter email',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailNewsletterRoutingModule { }
