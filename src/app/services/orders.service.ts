import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MAIN_API } from '../constants/apiUrl.js'

@Injectable({
    providedIn: 'root'
})

export class OrdersService {
    items = [];

    constructor(
        private http: HttpClient
    ) {}

    addToCart(product) {
        this.items.push(product);
    }

    getItems() {
        return this.items;
    }
    public getOrders(): Observable<Object>{
        return this.http.get(`${MAIN_API}orders.json`);
    }
    clearCart() {
        this.items = [];
        return this.items;
    }
}