import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InvoiceListComponent} from './invoice-list.component';

const routes: Routes = [
  {
    path: '',
    component: InvoiceListComponent,
    data: {
      title: 'Invoice List',
      icon: 'icon-layout-media-right',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - invoice list',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceListRoutingModule { }
