import {Component, OnInit, Injectable, ViewChild, Input} from '@angular/core';
import {OrdersService} from "../../../services/orders.service";
import {ordersModel} from "../../../constants/beModels";
import { ImportOrdersComponent as ImportOrdersComponentView } from "../../view/ImportOrders/import-orders.component";

@Component({
    selector: 'container-import-orders',
    templateUrl: './import-orders.component.html'
})
@Injectable()
export class ImportOrdersComponent implements OnInit{
    @ViewChild('viewImportOrders', {static: false}) private importOrdersView: ImportOrdersComponentView;
    orderFilterValue = '';
    productFilterValue = '';
    ordersCollection: {}[] = [];
    selectedOrder: {} = {};
    get filtratedOrdersCollection(){
       return this.ordersCollection.filter(order => order[ordersModel.ID].toString().includes(this.orderFilterValue))
    }
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
            id: ordersModel.SOST,
            title: "SOST"
        }
    ];
    firstIsCompleted: boolean = true;

    get secondIsCompleted(){
        return false;
    };
    get thirdIsCompleted(){
        return false;
    };

    constructor(
        private ordersService: OrdersService
    ) { }
    onSearch = value => {
        this.orderFilterValue = value;
    };
    onNextButtonClick() {
        console.log('onNextButtonClick', this.importOrdersView.nextStep);
        this.importOrdersView.nextStep()
    };
    onBackButtonClick = () => {
        this.importOrdersView.prevStep()
    };
    onOrderClick = order => {
        console.log(order)
        this.selectedOrder = order;
        this.firstIsCompleted = true;
        this.onNextButtonClick()
    };
    async ngOnInit() {
        await this.ordersService.getOrders().subscribe(
            data => {
                this.ordersCollection = data;
            }
        )
    };

}
