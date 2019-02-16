import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmailAppLaunchComponent} from './email-app-launch.component';

const routes: Routes = [
  {
    path: '',
    component: EmailAppLaunchComponent,
    data: {
      title: 'App Launch',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - app launch',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailAppLaunchRoutingModule { }
