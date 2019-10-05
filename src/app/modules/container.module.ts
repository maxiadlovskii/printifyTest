import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { OrdersContainer } from '../components/containers/Orders/orders.component'
import { ImportOrdersComponent } from '../components/containers/ImportOrders/import-orders.component'
import {ViewModule} from "./view.module";

@NgModule({
    imports: [
        BrowserModule,
        ViewModule
    ],
    exports: [
        OrdersContainer,
        ImportOrdersComponent
    ],
    declarations: [
        OrdersContainer,
        ImportOrdersComponent
    ],
    entryComponents: [
        ImportOrdersComponent
    ]
})

export class ContainerModule {}