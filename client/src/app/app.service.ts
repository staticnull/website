import {Http, Headers, URLSearchParams} from '@angular/http';
import {Injectable} from '@angular/core';

declare var baseUrl: any;

@Injectable()
export class ApiService {
    http: Http;
    baseUrl: string;

    constructor(http: Http) {
        this.http = http;
        this.baseUrl = baseUrl;
    }

    createHeaders(headers: Headers) {
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('X-Requested-With', 'XMLHttpRequest');
    }

    get(url, search?:URLSearchParams) {
        let headers = new Headers();
        this.createHeaders(headers);
        return this.http.get(this.baseUrl + url, {
            headers: headers,
            search:search
        });
    }

    post(url, data) {
        let headers = new Headers();
        this.createHeaders(headers);
        return this.http.post(this.baseUrl + url, data, {
            headers: headers
        });
    }

    put(url, data) {
        let headers = new Headers();
        this.createHeaders(headers);
        return this.http.put(this.baseUrl + url, data, {
            headers: headers
        });
    }

    delete(url, data) {
        let headers = new Headers();
        this.createHeaders(headers);
        return this.http.delete(this.baseUrl + url, {
            headers: headers
        });
    }
}