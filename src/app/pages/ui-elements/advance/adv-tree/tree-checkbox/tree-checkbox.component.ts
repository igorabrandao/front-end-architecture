import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ITreeOptions} from 'angular-tree-component';

@Component({
  selector: 'app-tree-checkbox',
  templateUrl: './tree-checkbox.component.html',
  styleUrls: [
    './tree-checkbox.component.scss',
    '../../../../../../../node_modules/angular-tree-component/dist/angular-tree-component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class TreeCheckboxComponent implements OnInit {
  nodes = [
    {
      name: 'root1'
    },
    {
      name: 'root2',
      children: [
        { name: 'child1' },
        { name: 'child2', children: [
            { name: 'grandchild1' },
            { name: 'grandchild2' }
          ] }
      ]
    }
  ];

  options: ITreeOptions = {
    useCheckbox: true
  };

  constructor() { }

  ngOnInit() {
  }

}
