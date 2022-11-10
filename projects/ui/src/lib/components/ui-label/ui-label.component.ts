import { Component, Input } from '@angular/core';
import { convertToBoolean } from '../../utils/util';

@Component({
  selector: 'ui-label',
  templateUrl: './ui-label.component.html',
  styleUrls: ['./ui-label.component.css']
})
export class UiLabelComponent {
  private _disabled: boolean = false;
  private _field: boolean = false;

  @Input('p-disabled') set disabled(value: boolean) {
    this._disabled = <any>value === '' ? true : convertToBoolean(value);
  }

  get disabled(): boolean {
    return this._disabled!;
  }

  @Input('p-field') set field(value: boolean) {
    this._field = <any>value === '' ? true : convertToBoolean(value);
  }

  get field(): boolean {
    return this._field!;
  }

  @Input('p-for') for?: string;

  @Input('p-label') label?: string;

  @Input('p-requirement') requirement?: string;
}
