import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-email-welcome',
  templateUrl: './email-welcome.component.html',
  styleUrls: ['./email-welcome.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmailWelcomeComponent implements OnInit {

  constructor() {
    document.querySelector('body').setAttribute('yahoo', 'fix');
    document.querySelector('body').setAttribute('style', 'margin: 0; padding:0; background-color: #444; background-image: none;');
  }

  ngOnInit() {
  }

}
