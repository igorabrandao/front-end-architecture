import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Error Pages',
      status: false
    },
    children: [
      {
        path: '400',
        loadChildren: './error-400/error-400.module#Error400Module'
      },
      {
        path: '403',
        loadChildren: './error-403/error-403.module#Error403Module'
      },
      {
        path: '404',
        loadChildren: './error-404/error-404.module#Error404Module'
      },
      {
        path: '500',
        loadChildren: './error-500/error-500.module#Error500Module'
      },
      {
        path: '503',
        loadChildren: './error-503/error-503.module#Error503Module'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
