import {Component, OnChanges, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

interface SimpleChange{
    isOpen: {
        previousValue: boolean,
        currentValue: boolean
    }
}

@Component({
    selector: 'ui-modal',
    templateUrl: 'modal.component.html',
    styleUrls: ['modal.component.css'],
})
export class ModalComponent implements OnChanges {
    @Input() ModalContent;
    @Input() afterClosed;
    @Input() isOpen;
    constructor(public dialog: MatDialog) {}

    openDialog() {
        const dialogRef = this.dialog.open(this.ModalContent);
        dialogRef.afterClosed().subscribe(result => {
            this.afterClosed()
        });
    }

    closeDialog() {
        this.dialog.closeAll()
    }

    ngOnChanges(changes) {
        const isOpen =  changes.isOpen.currentValue;
        if(isOpen){
            this.openDialog()
        } else {
            this.closeDialog()
        }
        // changes.prop contains the old and the new value...
    }
}
