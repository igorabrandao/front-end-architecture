import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-email-app-launch',
  templateUrl: './email-app-launch.component.html',
  styleUrls: ['./email-app-launch.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmailAppLaunchComponent implements OnInit {

  constructor() {
    document.querySelector('body').setAttribute('yahoo', 'fix');
    document.querySelector('body').setAttribute('style', 'margin: 0; padding:0; background-color: #444; background-image: none;');
  }

  ngOnInit() {
  }

}
