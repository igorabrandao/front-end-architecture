import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-draggable-task-board',
  templateUrl: './draggable-task-board.component.html',
  styleUrls: [
    './draggable-task-board.component.scss',
    '../../../../../../node_modules/dragula/dist/dragula.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class DraggableTaskBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
