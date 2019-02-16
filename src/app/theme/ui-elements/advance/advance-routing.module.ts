import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Advance Components',
      status: false
    },
    children: [
      {
        path: 'task-board',
        loadChildren: './draggable-task-board/draggable-task-board.module#DraggableTaskBoardModule'
      },
      {
        path: 'grid-stack',
        loadChildren: './grid-stack/grid-stack.module#GridStackModule'
      },
      {
        path: 'light-box',
        loadChildren: './adv-light-box/adv-light-box.module#AdvLightBoxModule'
      },
      {
        path: 'modal',
        loadChildren: './modal/modal.module#ModalModule'
      },
      {
        path: 'notifications',
        loadChildren: './notification/notification.module#NotificationModule'
      },
      /*{
        path: 'notify',
        loadChildren: './notify/notify.module#NotifyModule'
      },*/
      {
        path: 'rating',
        loadChildren: './rating/rating.module#RatingModule'
      },
      {
        path: 'range-slider',
        loadChildren: './range-slider/range-slider.module#RangeSliderModule'
      },
      {
        path: 'slider',
        loadChildren: './carousel/carousel.module#CarouselModule'
      },
      /*{
        path: 'tour',
        loadChildren: './adv-tour/adv-tour.module#AdvTourModule'
      },*/
      {
        path: 'tree',
        loadChildren: './adv-tree/adv-tree.module#AdvTreeModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvanceRoutingModule { }
