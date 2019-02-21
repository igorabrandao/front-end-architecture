import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdvLightBoxComponent} from './adv-light-box.component';

const routes: Routes = [
  {
    path: '',
    component: AdvLightBoxComponent,
    data: {
      title: 'Light Box',
      icon: 'icon-crown',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - light box',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvLightBoxRoutingModule { }
