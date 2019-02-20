import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Import the User model
import { User } from '../models/user.model';

// Import the config-related things
import { AppSettings } from '../../app-config';

@Injectable()
export class UserService {

    /**
     * Class constructor
     * 
     * @param http 
     * @param appSettings
     */
    constructor(public http: HttpClient, private appSettings: AppSettings) { }

    getAll() {
        return this.http.get<User[]>(`${this.appSettings.API_URL}/users`);
    }

    getById(id: number) {
        return this.http.get(`${this.appSettings.API_URL}/users/` + id);
    }

    register(user: User) {
        return this.http.post(`${this.appSettings.API_URL}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${this.appSettings.API_URL}/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.appSettings.API_URL}/users/` + id);
    }
}