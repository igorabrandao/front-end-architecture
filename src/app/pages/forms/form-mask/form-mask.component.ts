import { Component, OnInit } from '@angular/core';
import {createAutoCorrectedDatePipe, createNumberMask, emailMask} from 'text-mask-addons/dist/textMaskAddons';

@Component({
  selector: 'app-form-mask',
  templateUrl: './form-mask.component.html',
  styleUrls: ['./form-mask.component.scss']
})
export class FormMaskComponent implements OnInit {
  public maskUsMobile = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskUsMobileCountryCode = ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskDate = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  public maskDateAuto = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  public maskZipCode = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  public maskDatePipe = createAutoCorrectedDatePipe('dd/mm/yyyy');

  public maskUsAmount = createNumberMask({
    prefix: '$'
  });

  public maskUsAmountDecimal = createNumberMask({
    prefix: '',
    suffix: ' $',
    allowDecimal: true
  });

  public maskPercentage = createNumberMask({
    prefix: '',
    suffix: ' %',
    integerLimit: 2
  });

  public emailMask = emailMask;

  constructor() { }

  ngOnInit() {
  }

}
