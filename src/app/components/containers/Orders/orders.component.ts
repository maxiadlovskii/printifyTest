import {Component, OnInit} from '@angular/core';
import { OrdersService } from "../../../services/orders.service";
import { ordersModel } from "../../../constants/beModels.js"
import { ImportOrdersComponent } from '../ImportOrders/import-orders.component'

interface OrdersCollection {
    [ordersModel.ID]: string,
    [ordersModel.CUSTOMER]: string,
    [ordersModel.DATE_CREATED]: string,
    [ordersModel.REVENUE]: string,
    [ordersModel.SOST]: string,
    [ordersModel.PRICE]: string,
    [ordersModel.FULFILMENT]: string,
    [ordersModel.AMOUNT_OF_PRODUCTS]: number,
    [ordersModel.ORDER_VOLUME]: number,
    [ordersModel.SKU]: string
}


@Component({
    selector: 'container-orders',
    templateUrl: './orders.component.html'
})
export class OrdersContainer implements OnInit{
    ordersCollection = [];
    isImportOrdersOpen = false;
    ImportOrdersModalContent = ImportOrdersComponent;
    ordersColumns = [
        {
            id: ordersModel.ID,
            title: "#"
        },
        {
            id: ordersModel.CUSTOMER,
            title: "CUSTOMER"
        },
        {
            id: ordersModel.DATE_CREATED,
            title: "CREATED"
        },
        {
            id: ordersModel.REVENUE,
            title: "REVENUE"
        },
        {
            id: ordersModel.SOST,
            title: "SOST"
        },
        {
            id: ordersModel.PRICE,
            title: "PRICE"
        },
        {
            id: ordersModel.FULFILMENT,
            title: "#"
        }
    ];
    constructor(
        private ordersService: OrdersService
    ) { }

    async ngOnInit() {
         await this.ordersService.getOrders().subscribe(
             data => {
                 this.ordersCollection = data;
             }
         )
        this.isImportOrdersOpen = this.ordersService.importOrdersIsOpen
    };

    onImportOrders = () => {
        this.ordersService.setImportOrders(true)
    };
    afterImportOrdersClose = () => {
        this.ordersService.setImportOrders(false)
    }
}
