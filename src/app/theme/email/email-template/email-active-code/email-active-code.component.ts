import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-active-code',
  templateUrl: './email-active-code.component.html',
  styleUrls: ['./email-active-code.component.scss']
})
export class EmailActiveCodeComponent implements OnInit {

  constructor() {
    document.querySelector('body').setAttribute('yahoo', 'fix');
    document.querySelector('body').setAttribute('style', 'margin: 0; padding:0; background-color: #444; background-image: none;');
  }

  ngOnInit() {
  }

}
