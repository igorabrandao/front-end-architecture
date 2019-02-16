import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NouiFormatter} from 'ng2-nouislider';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

export class TimeFormatter implements NouiFormatter {
  to(value: number): string {
    const h = Math.floor(value / 3600);
    const m = Math.floor(value % 3600 / 60);
    const s = value - 60 * m - 3600 * h;
    const values = [h, m, s];
    let timeString: string;
    values.forEach((_, i) => {
      if (values[i] < 10) {
        timeString += '0';
      }
      timeString += values[i].toFixed(0);
      if (i < 2) {
        timeString += ':';
      }
    });
    return timeString;
  }

  from(value: string): number {
    const v = value.split(':').map(parseInt);
    let time = 0;
    time += v[0] * 3600;
    time += v[1] * 60;
    time += v[2];
    return time;
  }
}


@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: [
    './range-slider.component.scss',
    '../../../../../../node_modules/nouislider/distribute/nouislider.min.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class RangeSliderComponent implements OnInit {
  public disabled = false;
  public keyupLabelOn = false;
  public keydownLabelOn = false;
  public someValue = 5;
  public someMin = -10;
  public someMax = 10;
  public someStep = 1;
  public someRange: number[] = [3, 7];
  public someRange2: number[] = [10, 15];
  public someRange3: number[] = [2, 8];
  public simeTime = 0;
  public someRange2config: any = {
    behaviour: 'drag',
    connect: true,
    margin: 1,
    limit: 5,
    range: {
      min: 0,
      max: 20
    },
    pips: {
      mode: 'steps',
      density: 5
    }
  };

  public someKeyboard: number[] = [1, 3];
  public someKeyboardConfig: any = {
    behaviour: 'drag',
    connect: true,
    start: [0, 5],
    keyboard: true,
    step: 0.1,
    pageSteps: 10,  // number of page steps, defaults to 10
    range: {
      min: 0,
      max: 5
    },
    pips: {
      mode: 'count',
      density: 2,
      values: 6,
      stepped: true
    }
  };

  public tempHandler: any;
  public someKeyboard2: number[] = [1, 3];
  public someKeyboardConfig2: any = {
    behaviour: 'drag',
    connect: true,
    start: [0, 5],
    step: 0.1,
    range: {
      min: 0,
      max: 5
    },
    pips: {
      mode: 'count',
      density: 2,
      values: 6,
      stepped: true
    },
    keyboard: true,
    onKeydown: this.tempHandler,
  };

  public form1: FormGroup;
  public form2: FormGroup;
  public form3: FormGroup;

  public someTimeConfig: any = {
    start: 86400 / 2,
    range: {
      min: 0,
      max: 86399
    },
    tooltips: new TimeFormatter(),
    step: 1
  };

  public someKeyboard2EventHandler = (e: KeyboardEvent) => {
    console.log('overridden keyboard handler');

    // determine which handle triggered the event
    const index = (<HTMLElement>e.target).getAttribute('data-handle');

    let multiplier = 0;
    const stepSize = 0.1;

    switch ( e.which ) {
      case 40:  // ArrowDown
      case 37:  // ArrowLeft
        multiplier = -2;
        e.preventDefault();
        break;

      case 38:  // ArrowUp
      case 39:  // ArrowRight
        multiplier = 3;
        e.preventDefault();
        break;

      default:
        break;
    }

    this.tempHandler = this.someKeyboard2EventHandler;

    const delta = multiplier * stepSize;
    const newValue = [].concat(this.someKeyboard2);
    newValue[index] += delta;
    this.someKeyboard2 = newValue;
  }


  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.form1 = this.formBuilder.group({ 'single': [ 10 ] });
    this.form2 = this.formBuilder.group({ 'range': [ [ 2, 8 ] ] });
    this.form3 = this.formBuilder.group({ 'single': [ 3 ] });
  }

  changeSomeValue(value: number) {
    this.someValue = this.someValue + value;
  }

  changeSomeMin(value: number) {
    this.someMin = this.someMin + value;
  }

  changeSomeMax(value: number) {
    this.someMax = this.someMax + value;
  }

  changeSomeStep(value: number) {
    this.someStep = this.someStep + value;
  }

  changeSingleFormValue(value: number) {
    const control = <FormControl>this.form1.controls['single'];
    control.setValue(control.value + value);
  }

  changeRangeFormValue(index: number, value: number) {
    const control = <FormControl>this.form2.controls['range'];
    const newRange = control.value;
    newRange[index] = newRange[index] + value;
    control.setValue(newRange);
  }

  changeSomeRange(index: number, value: number) {
    const newRange = [this.someRange[0], this.someRange[1]];
    newRange[index] = newRange[index] + value;
    this.someRange = newRange;
  }

  onChange(value: any) {
    console.log('Value changed to', value);
  }

  blinkKeyupLabel() {
    this.keyupLabelOn = true;
    setTimeout(() => {
      this.keyupLabelOn = false;
    }, 450);
  }

  blinkKeydownLabel() {
    this.keydownLabelOn = true;
    setTimeout(() => {
      this.keydownLabelOn = false;
    }, 450);
  }

  toggleDisabled() {
    const control = this.form3.controls.single;
    control.enabled ? control.disable() : control.enable();
  }

}
