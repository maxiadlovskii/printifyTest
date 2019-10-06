import {Component, Input} from '@angular/core';

@Component({
    selector: 'view-prepare-product',
    styleUrls: ['./prepare-product.component.css'],
    templateUrl: './prepare-product.component.html'
})
export class PrepareProductComponent {
    @Input() selectedProduct;
    @Input() productsColumns;
    @Input() prepareProductsChange;
    @Input() productTypesCollection;
}