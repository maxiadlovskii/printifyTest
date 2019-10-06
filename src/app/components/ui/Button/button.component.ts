import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'ui-button',
    styleUrls: ['./button.component.css'],
    templateUrl: './button.component.html'
})

export class ButtonComponent {
    @Input() text;
    @Input() disabled: boolean = false;
    @Output() onClick = new EventEmitter();
}