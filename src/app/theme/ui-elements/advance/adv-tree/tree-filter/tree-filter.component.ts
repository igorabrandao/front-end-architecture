import { Component, OnInit } from '@angular/core';
import {TreeModel, TreeNode} from 'angular-tree-component';

@Component({
  selector: 'app-tree-filter',
  templateUrl: './tree-filter.component.html',
  styleUrls: [
    './tree-filter.component.scss',
    '../../../../../../../node_modules/angular-tree-component/dist/angular-tree-component.css'
  ]
})
export class TreeFilterComponent implements OnInit {
  nodes = [
    {
      name: 'North America',
      children: [
        { name: 'United States', children: [
            {name: 'New York'},
            {name: 'California'},
            {name: 'Florida'}
          ] },
        { name: 'Canada' }
      ]
    },
    {
      name: 'South America',
      children: [
        { name: 'Argentina', children: [] },
        { name: 'Brazil' }
      ]
    },
    {
      name: 'Europe',
      children: [
        { name: 'England' },
        { name: 'Germany' },
        { name: 'France' },
        { name: 'Italy' },
        { name: 'Spain' }
      ]
    }
  ];

  filterFn(value: string, treeModel: TreeModel) {
    treeModel.filterNodes((node: TreeNode) => fuzzysearch(value, node.data.name));
  }

  constructor() { }

  ngOnInit() {
  }

}

function fuzzysearch (needle: string, haystack: string) {
  const haystackLC = haystack.toLowerCase();
  const needleLC = needle.toLowerCase();

  const hlen = haystack.length;
  const nlen = needleLC.length;

  if (nlen > hlen) {
    return false;
  }
  if (nlen === hlen) {
    return needleLC === haystackLC;
  }
  outer: for (let i = 0, j = 0; i < nlen; i++) {
    const nch = needleLC.charCodeAt(i);

    while (j < hlen) {
      if (haystackLC.charCodeAt(j++) === nch) {
        continue outer;
      }
    }
    return false;
  }
  return true;
}
