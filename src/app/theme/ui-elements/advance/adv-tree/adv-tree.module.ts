import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvTreeComponent } from './adv-tree.component';
import {AdvTreeRoutingModule} from './adv-tree-routing.module';
import {SharedModule} from '../../../../shared/shared.module';
import {TreeModule} from 'angular-tree-component';
import { TreeBasicComponent } from './tree-basic/tree-basic.component';
import { TreeActionComponent } from './tree-action/tree-action.component';
import { TreeAsyncComponent } from './tree-async/tree-async.component';
import { TreeFilterComponent } from './tree-filter/tree-filter.component';
import { TreeDndComponent } from './tree-dnd/tree-dnd.component';
import { TreeCheckboxComponent } from './tree-checkbox/tree-checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    AdvTreeRoutingModule,
    SharedModule,
    TreeModule
  ],
  declarations: [
    AdvTreeComponent,
    TreeBasicComponent,
    TreeActionComponent,
    TreeAsyncComponent,
    TreeFilterComponent,
    TreeDndComponent,
    TreeCheckboxComponent
  ]
})
export class AdvTreeModule { }
