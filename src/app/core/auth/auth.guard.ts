import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    private access_token: string; // User access token
    private current_user: string; // User info

    /**
     * Class constructor
     * 
     * @param router 
     */
    constructor(private router: Router) { }

    /**
     * Method to check if there is a logged user
     * 
     * @param route 
     * @param state 
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        console.log('oi');

        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/auth/login/social'], { queryParams: { returnUrl: state.url } });
        return false;
    }

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
}