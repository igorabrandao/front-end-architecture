import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Import the auth service interface
import { AuthGuard } from './auth.guard';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {

    /**
     * Class constructor
     * 
     * @param authGuard
     */
    constructor(private authGuard: AuthGuard) {}

    /**
     * Interceptor component
     * 
     * @param req 
     * @param next 
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const dupReq = req.clone({
            // Add the access token into the request header
            headers: req.headers.set('Authorization', 'Bearer ' + this.authGuard.getToken)
        });
        return next.handle(dupReq);
    }
}

@NgModule({
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true }
    ]
})

export class TokenInterceptor {
}