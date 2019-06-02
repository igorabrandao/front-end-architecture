import { Injectable, NgModule } from '@angular/core';
import {
    HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorDialogService } from '../error/errordialog.service';

// Import the auth service interface
import { AuthenticationService } from '../services/auth.service';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {

    /**
     * Class constructor
     * 
     * @param authService
     */
    constructor(private authService: AuthenticationService, private errorDialogService: ErrorDialogService) { }

    /**
     * Interceptor component
     * 
     * @param req 
     * @param next 
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const dupReq = req.clone({
            // Add the access token into the request header
            headers: req.headers.set('Authorization', 'Bearer ' + this.authService.getToken)
        });
        //return next.handle(dupReq);

        return next.handle(dupReq).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                    // this.errorDialogService.openDialog(event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                let data = {};
                data = {
                    reason: error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                this.errorDialogService.openDialog(data);
                return throwError(error);
            }));
    }
}

@NgModule({
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true }
    ]
})

export class TokenInterceptor {
}