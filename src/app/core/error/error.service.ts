import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ErrorService {

    // Error attributes
    codeStatus: number;
    errorMessage: string = "";
    serviceName: string = "";
    operation: string = "";

    /**
     * Class constructor
     */
    constructor() { }
}