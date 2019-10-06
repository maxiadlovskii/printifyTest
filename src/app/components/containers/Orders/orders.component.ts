import {Component, OnInit} from '@angular/core';
import { OrdersService } from "../../../services/orders.service";
import { ordersModel } from "../../../constants/beModels"
import { ImportOrdersComponent } from '../ImportOrders/import-orders.component'

@Component({
    selector: 'container-orders',
    templateUrl: './orders.component.html'
})
export class OrdersContainer implements OnInit{
    ordersCollection: {}[]= [];
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
             response => {
                 this.ordersCollection = response['data'];
             }
         );
        this.isImportOrdersOpen = this.ordersService.importOrdersIsOpen
    };

    onImportOrders = () => {
        this.ordersService.setImportOrders(true)
    };
    afterImportOrdersClose = () => {
        this.ordersService.setImportOrders(false)
    }
}
