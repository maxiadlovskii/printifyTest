import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from '../components/ui/Table/table.component'
import { ButtonComponent } from "../components/ui/Button/button.component";
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        MatTableModule,
        MatButtonModule,
        BrowserModule
    ],
    exports: [
        TableComponent,
        ButtonComponent
    ],
    declarations: [
        TableComponent,
        ButtonComponent
    ]
})

export class UiModule {}