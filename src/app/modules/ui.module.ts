import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from '../components/ui/Table/table.component'
import { ButtonComponent } from "../components/ui/Button/button.component";
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from '../components/ui/Modal/modal.component'
import {MatFormFieldModule} from '@angular/material/form-field';
import { InputComponent } from '../components/ui/Input/input.component'
import {MatInputModule} from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
    imports: [
        MatTableModule,
        MatButtonModule,
        MatDialogModule,
        BrowserModule,
        MatFormFieldModule,
        MatInputModule,
        MatStepperModule
    ],
    exports: [
        MatStepperModule,
        TableComponent,
        ButtonComponent,
        ModalComponent,
        InputComponent
    ],
    declarations: [
        TableComponent,
        ButtonComponent,
        ModalComponent,
        InputComponent
    ]
})

export class UiModule {}