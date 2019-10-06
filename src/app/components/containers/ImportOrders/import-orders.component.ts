import {
    Component, OnInit, Injectable, ViewChild
} from '@angular/core';
import { stepTypes } from '../../../constants'
import { OrdersService } from "../../../services/orders.service";
import {ordersModel, productsModel, productTypesModel} from "../../../constants/beModels";
import { ImportOrdersComponent as ImportOrdersComponentView } from "../../view/ImportOrders/import-orders.component";
import {optionCreator} from "../../../utils";

@Component({
    selector: 'container-import-orders',
    templateUrl: './import-orders.component.html'
})
@Injectable()
export class ImportOrdersComponent implements OnInit{
    @ViewChild('viewImportOrders', {static: false}) private importOrdersView: ImportOrdersComponentView;
    orderFilterValue = '';
    productFilterValue = '';
    ordersCollection: {}[]= [];
    productsCollection: {}[]= [];
    productTypesCollection: {}[]= [];
    selectedOrder: {} = {};
    selectedProduct: {} = {};
    selectedProductTypes: [] = [];
    currentStep: Number = 0;
    get filtratedOrdersCollection(){
       return this.ordersCollection.filter(order => order[ordersModel.ID].toString().includes(this.orderFilterValue))
    }
    get filtratedProductsCollection(){
        return this.productsCollection.filter(product => product[productsModel.NAME].toLowerCase().includes(this.productFilterValue.toLowerCase()))
    }
    get showButtons(){
        return this.currentStep !== stepTypes.SELECT_ORDER
    }
    get showNextButton() {
        return ![stepTypes.SELECT_PRODUCT, stepTypes.CONFIRM_ORDER].includes(Number(this.currentStep))
    }
    get showFinishButton() {
        return this.currentStep === stepTypes.CONFIRM_ORDER
    }
    get disabledNextButton() {
        return this.currentStep === stepTypes.PREPARE_PRODUCTS && !this.selectedProductTypes.length
    }
    get chipsContent() {
        const def = [
            'My Orders',
            this.selectedOrder[ordersModel.ID],
            this.selectedProduct[productsModel.NAME]
        ];
        return def.slice(0, Number(this.currentStep)+1)
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
    productsColumns = [
        {
            id: productsModel.ID,
            title: "#"
        },
        {
            id: productsModel.NAME,
            title: "PRODUCT NAME"
        },
        {
            id: productsModel.IS_SELECTED,
            title: "IS SELECTED"
        }
    ];

    constructor(
        private ordersService: OrdersService
    ) { }
    onStepChanged = ({ nextStep }) => {
        const getData = {
            [stepTypes.SELECT_PRODUCT]: async () => {
                await this.ordersService.getProducts().subscribe(
                    response => {
                        this.productsCollection = response['data'];
                    }
                )
            },
            [stepTypes.PREPARE_PRODUCTS]: async () => {
            await this.ordersService.getProductTypes().subscribe(
                response => {
                    this.productTypesCollection = optionCreator({
                        list: response['data'],
                        idKey: productTypesModel.ID,
                        textKey: productTypesModel.NAME
                    });
                }
            )
        }
        };
        getData[nextStep] && getData[nextStep]()
    };
    setCurrentStep({ prevStep, nextStep }){
        this.currentStep = nextStep;
        this.onStepChanged({nextStep })
    }
    onSearchOrder = value => {
        this.orderFilterValue = value;
    };
    onSearchProduct = value => {
        this.productFilterValue = value;
    };
    onNextStep = ()=>{
        const { prevStep, nextStep } = this.importOrdersView.nextStep();
        this.setCurrentStep({ prevStep, nextStep });
    };
    onBackStep = () => {
        const { prevStep, nextStep } = this.importOrdersView.prevStep();
        this.setCurrentStep({ prevStep, nextStep });
    };
    onOrderClick = order => {
        this.selectedOrder = order;
        return this.onNextStep()
    };
    onProductClick = product => {
        this.selectedProduct = product;
        return this.onNextStep()
    };
    prepareProductsChange = selected => {
        this.selectedProductTypes = selected;
    };
    onFinishButtonClick = () => {
        this.ordersService.setImportOrders(false)
    };
    async ngOnInit() {
        await this.ordersService.getOrders().subscribe(
            response => {
                this.ordersCollection = response['data'];
            }
        )
    };


}
