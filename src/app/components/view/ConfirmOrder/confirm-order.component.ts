import {Component, Input} from '@angular/core';

@Component({
    selector: 'view-confirm-order',
    styleUrls: ['./confirm-order.component.css'],
    templateUrl: './confirm-order.component.html'
})
export class ConfirmOrderComponent {
    @Input() selectedProductTypes
}