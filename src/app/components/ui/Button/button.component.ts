import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'ui-button',
    styleUrls: ['./button.component.css'],
    templateUrl: './button.component.html'
})

export class ButtonComponent {
    @Input() text
    @Output() onClick = new EventEmitter();
}