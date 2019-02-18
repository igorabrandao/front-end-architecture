import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model'
import { catchError, retry, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { HttpErrorHandler, HandleError } from '../error/http-error-handler.service';

// Import the config-related things
import { AppSettings } from '../../app-config';

@Injectable()
export class UserService {
    // Error handler object
    private handleError: HandleError;

    /**
     * Class constructor
     * 
     * @param http 
     * @param appSettings 
     * @param httpErrorHandler 
     */
    constructor(public http: HttpClient, private appSettings: AppSettings,
        httpErrorHandler: HttpErrorHandler) {
        // Set up the error handler
        this.handleError = httpErrorHandler.createHandleError('UserService');
    }

    /**
     * Method responsible to perform login operation 
     * POST method
     * 
     * @param email 
     * @param password 
     */
    login(email: string, password: string): Observable<User> {
        // Request URL (dummy url in use)
        let url: string = this.appSettings.API_URL + 'users/login';

        // Data to be sent
        var dataToSend = {
            email: email,
            password: password
        };

        // Perform the API request
        return this.http.post(url, dataToSend)
            .pipe(
                // Debug purpose
                tap(data => console.log('[login]:', data)),
                // Retry the operaion x times if its fail
                retry(this.appSettings.API_CONNECTION_RETRY),
                // Perform the error handler
                catchError(this.handleError('login', null))
            );
    }

    /**
     * Method to retrieve all users
     * GET method
     */
    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.appSettings.API_URL)
            .pipe(
                retry(this.appSettings.API_CONNECTION_RETRY),
                catchError(this.handleError('getUsers', []))
            );
    }

    /**
     * Method to retrieve a specific user according to its ID
     * GET method
     * 
     * @param id 
     */
    getUser(id: number): Observable<User> {
        const url = `${this.appSettings.API_URL}/${id}`;
        return this.http.get<User>(url)
            .pipe(
                retry(this.appSettings.API_CONNECTION_RETRY),
                catchError(this.handleError('addUser', null))
            );
    }

    /**
     * Method to insert a new user
     * POST method
     * 
     * @param user 
     */
    addUser(user: User): Observable<User> {
        return this.http.post<User>(this.appSettings.API_URL, user)
            .pipe(
                retry(this.appSettings.API_CONNECTION_RETRY),
                catchError(this.handleError('addUser', user))
            );
    }

    /**
     * Method to delete an user
     * DELETE method
     * 
     * @param user 
     */
    deleteUser(user: User | number): Observable<{}> {
        const id = typeof user === 'number' ? user : user.id;
        const url = `${this.appSettings.API_URL}/${id}`;

        return this.http.delete(url)
            .pipe(
                retry(this.appSettings.API_CONNECTION_RETRY),
                catchError(this.handleError('deleteUser', null))
            );
    }

    /**
     * Method to update an user
     * PUT method
     * 
     * @param user 
     */
    updateUser(user: User): Observable<any> {
        return this.http.put(this.appSettings.API_URL, user)
            .pipe(
                catchError(this.handleError('updateUser', null))
            );
    }
}