import {NgModule} from "@angular/core";
import {MatTableModule} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import { OrdersContainer } from '../components/containers/Orders/orders.component'
import {ViewModule} from "./view.module";

@NgModule({
    imports: [
        BrowserModule,
        ViewModule
    ],
    exports: [
        OrdersContainer
    ],
    declarations: [
        OrdersContainer
    ]
})

export class ContainerModule {}