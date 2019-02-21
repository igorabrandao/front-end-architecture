import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GridStackComponent} from './grid-stack.component';

const routes: Routes = [
  {
    path: '',
    component: GridStackComponent,
    data: {
      title: 'Grid Stack',
      icon: 'icon-crown',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - grid stack',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridStackRoutingModule { }
