import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DraggableTaskBoardComponent} from './draggable-task-board.component';

const routes: Routes = [
  {
    path: '',
    component: DraggableTaskBoardComponent,
    data: {
      title: 'Task Board',
      icon: 'icon-crown',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - task board',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DraggableTaskBoardRoutingModule { }
