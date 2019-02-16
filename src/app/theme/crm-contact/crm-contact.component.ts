import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class CrmContact {
  id: number;
  image: any;
  name: string;
  email: string;
  position: string;
  office: string;
  age: number;
  phone_no: string;
  date: any;
}

@Component({
  selector: 'app-crm-contact',
  templateUrl: './crm-contact.component.html',
  styleUrls: [
    './crm-contact.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss'
  ]
})
export class CrmContactComponent implements OnInit {
  public data: Observable<CrmContact>;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  public userName: string;
  public userID: string;
  public userProPic: string;
  public userEmail: string;
  public userPosition: string;
  public userOffice: string;
  public userAge: number;
  public userContact: string;
  public userDate: string;

  @Input('modalDefault') modalDefault: any;

  constructor(public httpClient: HttpClient) { }

  ngOnInit() {
    this.data = this.httpClient.get<CrmContact>(`assets/data/crm-contact.json`);
  }

  openMyModal(event) {
    document.querySelector('#' + event).classList.add('md-show');
  }

  openMyModalData(event) {
    this.data.subscribe(response => {
        this.userName = response[event]['name'];
        this.userID = response[event]['id'];
        this.userProPic = response[event]['image'];
        this.userEmail = response[event]['email'];
        this.userPosition = response[event]['position'];
        this.userOffice = response[event]['office'];
        this.userAge = response[event]['age'];
        this.userContact = response[event]['phone_no'];
        this.userDate = response[event]['date'];
    });
  }

  closeMyModal(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
  }

}
