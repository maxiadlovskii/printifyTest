import {Component, Input} from '@angular/core';

@Component({
    selector: 'view-select-order',
    styleUrls: ['./select-order.component.css'],
    templateUrl: './select-order.component.html'
})
export class SelectOrderComponent {
    @Input() tableData;
    @Input() ordersColumns;
    @Input() onOrderClick;
    @Input() onSearchOrder;
}