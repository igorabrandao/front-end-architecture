import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

// Import the config-related things
import { AppSettings } from '../../../app-config';

@Injectable()
export class UsersProvider {

    /**
     * Example how to perform API requests
     */

    /**
     * Class constructor
     * 
     * @param http 
     * @param appSettings 
     */
    constructor(public http: HttpClient, private appSettings: AppSettings) {
    }

    /**
     * Method responsible to perform login operation 
     * POST method
     * 
     * @param email 
     * @param password 
     * 
     * @returns {Promise<any>}
     */
    login(email: string, password: string) {
        return new Promise((resolve, reject) => {
            // Request URL (dummy url in use)
            let url: string = this.appSettings.API_URL + 'users/login';

            // Data to be sent
            var data = {
                email: email,
                password: password
            };

            this.http.post(url, data)
                .subscribe((result: any) => {
                    resolve(result);
                }, (error) => {
                    reject(error);
                });
        });
    }
}