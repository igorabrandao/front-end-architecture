import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

    // =================================================================================
    // CLASS ATTRIBUTES
    // =================================================================================
    
    private access_token: string; // User access token

    // =================================================================================
    // CLASS METHODS
    // =================================================================================

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