import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {ProductListComponent} from "../components/view/TashFromAngularGetStarted/product-list/product-list.component";
import {ProductDetailsComponent} from "../components/view/TashFromAngularGetStarted/product-details/product-details.component";
import {CartComponent} from "../components/view/TashFromAngularGetStarted/cart/cart.component";
import {ShippingComponent} from "../components/view/TashFromAngularGetStarted/shipping/shipping.component";
import { OrdersPageComponent } from "../components/pages/Orders/orders.component"
import {PagesRouterComponent} from "../components/pages/Router/router.component";
import {ContainerModule} from "./container.module";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {path: '', component: OrdersPageComponent},
            {path: 'orders', component: OrdersPageComponent}
        ]),
        ContainerModule,
    ],
    exports: [
        PagesRouterComponent,
        RouterModule
    ],
    declarations: [
        PagesRouterComponent,
        OrdersPageComponent
    ]
})

export class PageModule {}