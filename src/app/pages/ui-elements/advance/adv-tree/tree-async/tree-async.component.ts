import { Component, OnInit } from '@angular/core';
import {ITreeOptions} from 'angular-tree-component';

@Component({
  selector: 'app-tree-async',
  templateUrl: './tree-async.component.html',
  styleUrls: [
    './tree-async.component.scss',
    '../../../../../../../node_modules/angular-tree-component/dist/angular-tree-component.css'
  ]
})
export class TreeAsyncComponent implements OnInit {
  options: ITreeOptions = {
    getChildren: this.getChildren.bind(this)
  };

  nodes: any[] = [];

  asyncChildren = [
    {
      name: 'child1',
      hasChildren: true
    }, {
      name: 'child2'
    }
  ];

  constructor() {
    this.nodes = [
      {
        name: 'root1',
        children: [
          { name: 'child1' }
        ]
      },
      {
        name: 'root2',
        hasChildren: true
      },
      {
        name: 'root3'
      }
    ];
  }

  ngOnInit() {
  }

  getChildren(node: any) {
    const newNodes = this.asyncChildren.map((c) => Object.assign({}, c));

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(newNodes), 1000);
    });
  }

}
