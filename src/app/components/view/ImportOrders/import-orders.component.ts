import {Component, Input, ViewChild} from '@angular/core';
import {MatStepper} from "@angular/material";

@Component({
    selector: 'view-import-orders',
    styleUrls: ['./import-orders.component.css'],
    templateUrl: './import-orders.component.html',
})
export class ImportOrdersComponent {
    @ViewChild('stepper', {static: false}) private myStepper: MatStepper;
    @Input() onSearch;
    @Input() tableData;
    @Input() ordersColumns;
    @Input() onBackButtonClick;
    @Input() onNextButtonClick;
    @Input() firstIsCompleted;
    @Input() secondIsCompleted;
    @Input() thirdIsCompleted;
    @Input() onOrderClick;
    nextStep() {
        console.log('nextStep');
        this.myStepper.next()
    }
    prevStep = ()=>{
        this.myStepper.previous();
    }
}