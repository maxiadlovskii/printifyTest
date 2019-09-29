import {Component, Input} from '@angular/core';

@Component({
    selector: 'view-orders',
    styleUrls: ['./orders.component.css'],
    templateUrl: './orders.component.html',
})
export class OrdersView {
    @Input() tableSource;
    @Input() tableColumns;
    @Input() onImportOrders;
}