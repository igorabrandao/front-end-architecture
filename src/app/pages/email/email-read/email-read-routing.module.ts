import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmailReadComponent} from './email-read.component';

const routes: Routes = [
  {
    path: '',
    component: EmailReadComponent,
    data: {
      title: 'View Mail',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - view mail',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailReadRoutingModule { }
