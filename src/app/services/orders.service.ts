import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MAIN_API } from '../constants/apiUrl.js'

@Injectable({
    providedIn: 'root'
})

export class OrdersService {
    public importOrdersIsOpen = false;
    constructor(
        private http: HttpClient
    ) {}
    public setImportOrders(state) {
        this.importOrdersIsOpen = state
    }
    public getOrders(): Observable<Object>{
        return this.http.get(`${MAIN_API}orders.json`);
    }

    public getProducts(): Observable<Object>{
        return this.http.get(`${MAIN_API}products.json`);
    }
    public getProductTypes(): Observable<Object>{
        return this.http.get(`${MAIN_API}productTypes.json`);
    }

}