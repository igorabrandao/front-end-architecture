import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormWizardsComponent} from './form-wizards.component';

const routes: Routes = [
  {
    path: '',
    component: FormWizardsComponent,
    data: {
      title: 'Forms Wizard',
      icon: 'icon-layers',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - form wizard',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormWizardsRoutingModule { }
