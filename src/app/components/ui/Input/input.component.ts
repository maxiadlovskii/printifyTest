import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'ui-input',
    styleUrls: ['./input.component.css'],
    templateUrl: './input.component.html'
})

export class InputComponent {
    @Input() placeholder;
    @Input() value;
    @Output() onChange = new EventEmitter();
}