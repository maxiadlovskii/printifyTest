import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { OrdersView } from '../components/view/Orders/orders.component'
import {UiModule} from "./ui.module";
import { ImportOrdersComponent } from '../components/view/ImportOrders/import-orders.component'
import { SelectOrderComponent } from '../components/view/SelectOrder/select-order.component'
import { SelectProductComponent } from '../components/view/SelectProduct/select-product.component'
import { ConfirmOrderComponent } from '../components/view/ConfirmOrder/confirm-order.component'
import { PrepareProductComponent } from '../components/view/PrepareProduct/prepare-product.component'

@NgModule({
    imports: [
        BrowserModule,
        UiModule
    ],
    exports: [
        OrdersView,
        ImportOrdersComponent,
        SelectOrderComponent,
        SelectProductComponent,
        ConfirmOrderComponent,
        PrepareProductComponent
    ],
    declarations: [
        OrdersView,
        ImportOrdersComponent,
        SelectOrderComponent,
        SelectProductComponent,
        ConfirmOrderComponent,
        PrepareProductComponent
    ]
})

export class ViewModule {}