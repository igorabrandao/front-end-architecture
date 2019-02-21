import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class OtherData {
  name: string;
  position: string;
  office: string;
  age: number;
  date: any;
  salary: string;
}

@Component({
  selector: 'app-other-datatable',
  templateUrl: './other-datatable.component.html',
  styleUrls: [
    './other-datatable.component.scss',
    '../../../../../assets/icon/icofont/css/icofont.scss'
  ]
})
export class OtherDatatableComponent implements OnInit {
  public data: Observable<OtherData>;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(public httpClient: HttpClient) { }

  ngOnInit() {
    this.data = this.httpClient.get<OtherData>(`assets/data/data.json`);
  }

}
