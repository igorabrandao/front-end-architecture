import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdvTreeComponent} from './adv-tree.component';

const routes: Routes = [
  {
    path: '',
    component: AdvTreeComponent,
    data: {
      title: 'Tree View',
      icon: 'icon-crown',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - tree view',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvTreeRoutingModule { }
