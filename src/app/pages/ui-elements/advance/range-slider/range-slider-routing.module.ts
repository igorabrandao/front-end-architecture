import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RangeSliderComponent} from './range-slider.component';

const routes: Routes = [
  {
    path: '',
    component: RangeSliderComponent,
    data: {
      title: 'Range Slider',
      icon: 'icon-crown',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - range slider',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RangeSliderRoutingModule { }
