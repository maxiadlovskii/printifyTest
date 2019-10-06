import {Component, Input} from '@angular/core';

@Component({
    selector: 'view-select-product',
    styleUrls: ['./select-product.component.css'],
    templateUrl: './select-product.component.html'
})
export class SelectProductComponent {
    @Input() onSearchProduct;
    @Input() productTableData;
    @Input() productsColumns;
    @Input() onProductClick;
    @Input() onNextButtonClick
}