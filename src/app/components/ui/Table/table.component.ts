import {Component, Input, OnInit} from '@angular/core';
@Component({
    selector: 'ui-table',
    styleUrls: ['./table.component.css'],
    templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
    @Input() displayedColumns;
    @Input() dataSource;
    @Input() onRowClick;
    @Input() additionClasses: [] = [];
    get rowClass(){
        const defaultClass = 'row';
        return [defaultClass, ...this.additionClasses];
    }
    columnsId;
    handleRowClick = row => {
        this.onRowClick && this.onRowClick(row)
    }
    ngOnInit() {
        console.log({ displayedColumns: this.displayedColumns, dataSource: this.dataSource})
        this.columnsId = this.displayedColumns.map(({id}) => id)
    }
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */