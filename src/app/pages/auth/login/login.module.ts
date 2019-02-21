import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../../../shared/shared.module';

// Custom dependencies
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertService } from '../../../core/services/alert.service';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [LoginComponent],
    providers: [
        AlertService
    ],
})
export class LoginModule { }