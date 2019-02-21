import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Import the app global settings
import { AppSettings } from '../../app-settings';

@Injectable()
export class AuthenticationService {

    private access_token: string; // User access token

    /**
     * Class constructor
     * 
     * @param http 
     * @param appSettings
     */
    constructor(public http: HttpClient, private appSettings: AppSettings) { }

    /**
     * Method to retrieve the user access token
     *
     * @return {string}
     */
    public getToken(): string {
        return this.access_token;
    }

    /**
     * Method to save the user access token
     *
     * @param {string} token_
     */
    public setToken(token_: string): void {
        this.access_token = token_;
        localStorage.setItem('access_token', this.access_token);
    }

    /**
     * Method to validate if the user is authenticated
     *
     * @return {boolean}
     */
    public isAuthenticated(): boolean {
        // Check the token status
        if (this.access_token != null && this.access_token != "") {
            return true;
        } else {
            return false;
        }

        /**
         * Next steps:
         * get the token
         * const token = this.getToken();
         * return a boolean reflecting
         * whether or not the token is expired
         * return tokenNotExpired(null, token);
         */
    }

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