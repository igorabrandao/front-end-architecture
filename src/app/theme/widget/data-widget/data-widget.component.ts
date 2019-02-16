import {Component, ElementRef, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-widget',
  templateUrl: './data-widget.component.html',
  styleUrls: ['./data-widget.component.scss']
})
export class DataWidgetComponent implements OnInit {
  public appSaleData1: any;
  public appSaleData2: any;
  public appSaleData3: any;
  public appSaleData4: any;
  public appSaleOption: any;

  public projectStatus1Data: any;
  public projectStatus2Data: any;
  public projectStatus3Data: any;
  public projectStatusOption: any;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.appSaleData1 = amountChart('#11c15b', [1, 15, 30, 15, 25, 35, 45, 20, 25, 30], 'transparent');
      this.appSaleData2 = amountChart('#448aff', [45, 30, 25, 35, 20, 35, 45, 20, 25, 1], 'transparent');
      this.appSaleData3 = amountChart('#ff5252', [1, 45, 24, 40, 20, 35, 10, 20, 45, 30], 'transparent');
      this.appSaleData4 = amountChart('#536dfe', [1, 15, 45, 15, 25, 35, 45, 20, 25, 30], 'transparent');
      this.appSaleOption = buildChartOption();

      this.projectStatus1Data = {
        datasets: [{
          data: [10, 20],
          backgroundColor: ['#91baff', '#536dfe'],
          label: 'Dataset 1'
        }],
        labels: ['Red', 'Orange']
      };
      this.projectStatus2Data = {
        datasets: [{
          data: [10, 20],
          backgroundColor: ['#11c15b', '#9dffc6'],
          label: 'Dataset 1'
        }],
        labels: ['Red', 'Orange']
      };
      this.projectStatus3Data = {
        datasets: [{
          data: [10, 20],
          backgroundColor: ['#ff5252', '#ffa7a7'],
          label: 'Dataset 1'
        }],
        labels: ['Red', 'Orange']
      };
      this.projectStatusOption = {
        title: {
          display: !1,
        },
        tooltips: {
          display: !1,
        },
        legend: {
          display: !1,
          labels: {
            usePointStyle: !1
          }
        },
        responsive: true,

      };

    }, 100);
  }

}

function amountChart(a, b, f) {
  if (f == null) {
    f = 'rgba(0,0,0,0)';
  }
  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
    datasets: [{
      label: '',
      borderColor: a,
      borderWidth: 1,
      hitRadius: 30,
      pointRadius: 0,
      pointHoverRadius: 4,
      pointBorderWidth: 50,
      pointHoverBorderWidth: 12,
      pointBackgroundColor: '#000000',
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: a,
      pointHoverBorderColor: 'transparent',
      fill: true,
      backgroundColor: f,
      data: b,
    }]
  };
}
function buildChartOption() {
  return {
    title: {
      display: !1
    },
    tooltips: {
      position: 'nearest',
      mode: 'index',
      intersect: false,
      yPadding: 10,
      xPadding: 10,
    },
    legend: {
      display: !1,
      labels: {
        usePointStyle: !1
      }
    },
    responsive: !0,
    maintainAspectRatio: !0,
    hover: {
      mode: 'index'
    },
    scales: {
      xAxes: [{
        display: !1,
        gridLines: !1,
        scaleLabel: {
          display: !0,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: !1,
        gridLines: !1,
        scaleLabel: {
          display: !0,
          labelString: 'Value'
        },
        ticks: {
          beginAtZero: !0
        }
      }]
    },
    elements: {
      point: {
        radius: 4,
        borderWidth: 12
      }
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    }
  };
}

import {Directive} from '@angular/core';

@Directive({
  selector: '[appToDoListRead]',
})
export class AppToDoListReadDirective {
  constructor(public el: ElementRef) {}

  @HostListener('click', ['$event']) onClick($event) {
    (this.el.nativeElement.parentElement).classList.toggle('done-task');
  }
}

@Directive({
  selector: '[appToDoListRemove]',
})
export class AppToDoListRemoveDirective {
  constructor(public el: ElementRef) {}

  @HostListener('click', ['$event']) onClick($event) {
    (this.el.nativeElement.parentElement.parentElement).classList.add('d-none');
  }
}
