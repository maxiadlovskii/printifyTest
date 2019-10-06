import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { OrdersView } from '../components/view/Orders/orders.component'
import {UiModule} from "./ui.module";
import { ImportOrdersComponent } from '../components/view/ImportOrders/import-orders.component'


@NgModule({
    imports: [
        BrowserModule,
        UiModule
    ],
    exports: [
        OrdersView,
        ImportOrdersComponent
    ],
    declarations: [
        OrdersView,
        ImportOrdersComponent
    ]
})

export class ViewModule {}