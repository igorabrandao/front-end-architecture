import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableTaskBoardComponent } from './draggable-task-board.component';
import {DraggableTaskBoardRoutingModule} from './draggable-task-board-routing.module';
import {SharedModule} from '../../../../shared/shared.module';
import {DragulaModule} from 'ng2-dragula';


@NgModule({
  imports: [
    CommonModule,
    DraggableTaskBoardRoutingModule,
    SharedModule,
    DragulaModule
  ],
  declarations: [DraggableTaskBoardComponent]
})
export class DraggableTaskBoardModule { }
