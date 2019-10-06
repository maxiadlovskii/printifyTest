import {Component, Input} from '@angular/core';

@Component({
    selector: 'ui-chips-list',
    styleUrls: ['./chips-list.component.css'],
    templateUrl: './chips-list.component.html'
})
export class ChipsListComponent {
    @Input() list
}