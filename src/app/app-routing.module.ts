import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';

// Import routing guard module
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: 'dashboard/default',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'navigation',
                loadChildren: './pages/navigation/navigation.module#NavigationModule'
            },
            {
                path: 'widget',
                loadChildren: './pages/widget/widget.module#WidgetModule'
            },
            {
                path: 'basic',
                loadChildren: './pages/ui-elements/basic/basic.module#BasicModule'
            },
            {
                path: 'advance',
                loadChildren: './pages/ui-elements/advance/advance.module#AdvanceModule'
            },
            {
                path: 'animations',
                loadChildren: './pages/ui-elements/animation/animation.module#AnimationModule'
            },
            {
                path: 'forms',
                loadChildren: './pages/forms/forms.module#FormsModule'
            },
            {
                path: 'bootstrap-table',
                loadChildren: './pages/table/bootstrap-table/bootstrap-table.module#BootstrapTableModule'
            },
            {
                path: 'data-table',
                loadChildren: './pages/table/data-table/data-table.module#DataTableModule'
            },
            {
                path: 'user',
                loadChildren: './pages/user/user.module#UserModule'
            },
            {
                path: 'email',
                loadChildren: './pages/email/email.module#EmailModule'
            },
            {
                path: 'crm-contact',
                loadChildren: './pages/crm-contact/crm-contact.module#CrmContactModule'
            },
            {
                path: 'task',
                loadChildren: './pages/task/task.module#TaskModule'
            },
            {
                path: 'editor',
                loadChildren: './pages/extension/editor/editor.module#EditorModule'
            },
            {
                path: 'invoice',
                loadChildren: './pages/extension/invoice/invoice.module#InvoiceModule'
            },
            {
                path: 'file-upload-ui',
                loadChildren: './pages/extension/file-upload-ui/file-upload-ui.module#FileUploadUiModule'
            },
            {
                path: 'calendar',
                loadChildren: './pages/extension/event-calendar/event-calendar.module#EventCalendarModule'
            },
            {
                path: 'charts',
                loadChildren: './pages/chart/chart.module#ChartModule'
            },
            {
                path: 'map',
                loadChildren: './pages/map/map.module#MapModule'
            },
            {
                path: 'simple-page',
                loadChildren: './pages/simple-page/simple-page.module#SimplePageModule'
            }
        ]
    },
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: 'auth',
                loadChildren: './pages/auth/auth.module#AuthModule'
            },
            {
                path: 'maintenance/error',
                loadChildren: './pages/maintenance/error/error.module#ErrorModule'
            },
            {
                path: 'maintenance/coming-soon',
                loadChildren: './pages/maintenance/coming-soon/coming-soon.module#ComingSoonModule'
            },
            {
                path: 'email/email-template',
                loadChildren: './pages/email/email-template/email-template.module#EmailTemplateModule'
            },
            {
                path: 'maintenance/offline-ui',
                loadChildren: './pages/maintenance/offline-ui/offline-ui.module#OfflineUiModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }