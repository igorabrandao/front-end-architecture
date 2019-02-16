import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-email-inbox',
  templateUrl: './email-inbox.component.html',
  styleUrls: [
    './email-inbox.component.scss',
    '../../../../assets/icon/icofont/css/icofont.scss'
  ]
})
export class EmailInboxComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.navigate(['/email/email-inbox/e-main'], { skipLocationChange: true });
  }

}
