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
            console.log(`Dialog result: ${result}`);
            this.afterClosed()
        });
    }

    ngOnChanges(changes) {
        const isOpen =  changes.isOpen.currentValue;
        console.log(changes);
        if(isOpen){
            this.openDialog()
        }
        // changes.prop contains the old and the new value...
    }
}
