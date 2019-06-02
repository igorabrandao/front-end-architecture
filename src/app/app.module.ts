import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MenuItems } from './shared/menu-items/menu-items';
import { BreadcrumbsComponent } from './layout/admin/breadcrumbs/breadcrumbs.component';
import { ErrorDialogComponent } from './core/error/errordialog.component';


// APP settings
import { AppSettings } from './app-settings';

// API Handlers
import { HttpsRequestInterceptor } from './core/auth/token.interceptor';
import { ErrorDialogService } from './core/error/errordialog.service';
import { AuthenticationService } from './core/services/auth.service';

// Security routing handler
import { AuthGuard } from './core/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    BreadcrumbsComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    AppSettings,
    MenuItems,
    AuthGuard,
    AuthenticationService,
    ErrorDialogService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }