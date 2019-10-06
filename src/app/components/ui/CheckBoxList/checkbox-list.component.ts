import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'ui-checkbox-list',
    styleUrls: ['./checkbox-list.component.css'],
    templateUrl: './checkbox-list.component.html'
})

export class CheckboxListComponent {
    @Input() itemsList;
    @Output() onChange = new EventEmitter<[]>();
    onChangeSelection = (e) => {
        const selected = e.source.selectedOptions.selected.map(item => item.value);
        this.onChange.emit(selected)
    }
}