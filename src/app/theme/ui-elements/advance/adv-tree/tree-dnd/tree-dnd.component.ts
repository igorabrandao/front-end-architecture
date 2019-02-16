import { Component, OnInit } from '@angular/core';
import {ITreeOptions, ITreeState} from 'angular-tree-component';
import { v4 } from 'uuid';

@Component({
  selector: 'app-tree-dnd',
  templateUrl: './tree-dnd.component.html',
  styleUrls: [
    './tree-dnd.component.scss',
    '../../../../../../../node_modules/angular-tree-component/dist/angular-tree-component.css'
  ]
})
export class TreeDndComponent implements OnInit {
  state: ITreeState = {
    expandedNodeIds: {
      1: true,
      2: true
    },
    hiddenNodeIds: {},
    activeNodeIds: {}
  };

  options: ITreeOptions = {
    allowDrag: (node) => node.isLeaf,
    getNodeClone: (node) => ({
      ...node.data,
      id: v4(),
      name: `copy of ${node.data.name}`
    })
  };

  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { name: 'child1' },
        { name: 'child2' }
      ]
    },
    {
      name: 'root2',
      id: 2,
      children: [
        { name: 'child2.1', children: [] },
        { name: 'child2.2', children: [
            {name: 'grandchild2.2.1'}
          ] }
      ]
    },
    { name: 'root3' },
    { name: 'root4', children: [] },
    { name: 'root5', children: null }
  ];

  constructor() { }

  ngOnInit() {
  }

}
