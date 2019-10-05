import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from '../components/ui/Table/table.component'
import { ButtonComponent } from "../components/ui/Button/button.component";
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from '../components/ui/Modal/modal.component'

@NgModule({
    imports: [
        MatTableModule,
        MatButtonModule,
        MatDialogModule,
        BrowserModule
    ],
    exports: [
        TableComponent,
        ButtonComponent,
        ModalComponent
    ],
    declarations: [
        TableComponent,
        ButtonComponent,
        ModalComponent
    ]
})

export class UiModule {}