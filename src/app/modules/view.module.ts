import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { OrdersView } from '../components/view/Orders/orders.component'
import {UiModule} from "./ui.module";

@NgModule({
    imports: [
        BrowserModule,
        UiModule
    ],
    exports: [
        OrdersView
    ],
    declarations: [
        OrdersView
    ]
})

export class ViewModule {}