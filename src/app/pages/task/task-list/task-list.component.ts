import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: [
    './task-list.component.scss',
    '../../../../assets/icon/icofont/css/icofont.scss'
  ]
})
export class TaskListComponent implements OnInit {
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(public httpClient: HttpClient) {
  }

  ngOnInit() {
    this.data = this.httpClient.get(`assets/data/task-list.json`);
  }

}
