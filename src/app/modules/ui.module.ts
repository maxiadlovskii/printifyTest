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
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { CheckboxListComponent } from '../components/ui/CheckBoxList/checkbox-list.component'
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatChipsModule} from '@angular/material/chips';
import { ChipsListComponent } from '../components/ui/ChipsList/chips-list.component'

@NgModule({
    imports: [
        MatTableModule,
        MatButtonModule,
        MatDialogModule,
        BrowserModule,
        MatFormFieldModule,
        MatInputModule,
        MatStepperModule,
        MatExpansionModule,
        MatPaginatorModule,
        MatChipsModule,
        MatListModule
    ],
    exports: [
        MatStepperModule,
        MatExpansionModule,
        TableComponent,
        ButtonComponent,
        ModalComponent,
        InputComponent,
        CheckboxListComponent,
        MatListModule,
        ChipsListComponent
    ],
    declarations: [
        TableComponent,
        ButtonComponent,
        ModalComponent,
        InputComponent,
        CheckboxListComponent,
        ChipsListComponent
    ]
})

export class UiModule {}