import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class BusinessService {
    uri = 'http://localhost:3000/business';
    constructor(private http: HttpClient) {

    }
    getBisnis() {
        return this.http.get(`${this.uri}`);
    }
    deleteBisnis(id) {
        return this
            .http
            .get(`${this.uri}/delete/${id}`);
    }
    showBisnis(id) {
        return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }




}