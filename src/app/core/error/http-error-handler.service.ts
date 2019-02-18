import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { ErrorService } from './error.service';

export type HandleError = <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

/** Handles HttpClient errors */
@Injectable()
export class HttpErrorHandler {

    /**
     * Class constructor
     * 
     * @param errorService 
     */
    constructor(private errorService: ErrorService) { }

    /** Create handleError function that already knows the service name */
    createHandleError = (serviceName = '') => <T>
        (operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result);

    /**
     * @param serviceName: name of the data service
     * @param operation: name of the failed operation
     * @param result: optional value to return as the observable result
     */
    handleError<T>(serviceName = '', operation = 'operation', result = {} as T) {

        return (error: HttpErrorResponse): Observable<T> => {
            // Todo -> Send the error to remote logging infrastructure
            console.error(error); // log to console instead

            const message = (error.error instanceof ErrorEvent) ?
                error.error.message :
                `{error code: ${error.status}, body: "${error.message}"}`;

            // Transforming error for user consumption
            this.errorService.codeStatus = error.status;
            this.errorService.errorMessage = error.message;
            this.errorService.serviceName = serviceName;
            this.errorService.operation = operation;

            // Return a safe result.
            return of(result);
        };
    }
}