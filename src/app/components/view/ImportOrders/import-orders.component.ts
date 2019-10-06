import {Component, Input, ViewChild} from '@angular/core';
import {MatStepper} from "@angular/material";

@Component({
    selector: 'view-import-orders',
    styleUrls: ['./import-orders.component.css'],
    templateUrl: './import-orders.component.html'
})
export class ImportOrdersComponent {
    @ViewChild('stepper', {static: false}) private myStepper: MatStepper;
    @Input() onSearchOrder;
    @Input() onSearchProduct;
    @Input() tableData;
    @Input() ordersColumns;
    @Input() onBackButtonClick;
    @Input() onNextButtonClick;
    @Input() onOrderClick;
    @Input() onProductClick;
    @Input() productFilterValue;
    @Input() productsColumns;
    @Input() productTableData;
    @Input() selectedProduct;
    @Input() showButtons;
    @Input() nextButtonText: string = 'Next';
    @Input() backButtonText: string = 'Back';
    @Input() showNextButton: boolean;
    @Input() disabledNextButton: boolean;
    @Input() productTypesCollection;
    @Input() prepareProductsChange;
    @Input() selectedProductTypes;
    @Input() showFinishButton;
    @Input() finishButtonText: string = "Finish";
    @Input() onFinishButtonClick;
    @Input() chipsContent;

    nextStep = () => {
        const prevStep = this.getCurrentStep();
        this.myStepper.next();
        const nextStep = this.getCurrentStep();
        return ({
            prevStep, nextStep
        })
    }
    prevStep = () =>{
        const prevStep = this.getCurrentStep();
        this.myStepper.previous();
        const nextStep = this.getCurrentStep();
        return ({
            prevStep, nextStep
        })
    }
    getCurrentStep() {
        return this.myStepper.selectedIndex
    }
}