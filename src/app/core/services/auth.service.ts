import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Import the config-related things
import { AppSettings } from '../../app-config';

@Injectable()
export class AuthenticationService {

    /**
     * Class constructor
     * 
     * @param http 
     * @param appSettings
     */
    constructor(public http: HttpClient, private appSettings: AppSettings) { }

    /**
     * Method responsible to perform login operation 
     * POST method
     * 
     * @param username 
     * @param password 
     */
    login(username: string, password: string) {
        return this.http.post<any>(`${this.appSettings.API_URL}/users/authenticate`, { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    /**
     * Method responsible to perform user logout operation 
     */
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}