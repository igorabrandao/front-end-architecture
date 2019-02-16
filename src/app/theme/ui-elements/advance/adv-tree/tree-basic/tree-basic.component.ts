import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-basic',
  templateUrl: './tree-basic.component.html',
  styleUrls: [
    './tree-basic.component.scss',
    '../../../../../../../node_modules/angular-tree-component/dist/angular-tree-component.css'
  ]
})
export class TreeBasicComponent implements OnInit {
  nodes = [
    {
      name: 'root1',
      children: [
        { name: 'child1' },
        { name: 'child2' }
      ]
    },
    {
      name: 'root2',
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
  options = {};

  constructor() { }

  ngOnInit() {
  }

}
