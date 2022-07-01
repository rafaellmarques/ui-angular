import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { convertToBoolean } from '../../utils/util';
import { UiRadioSize } from './ui-radio-size.enum';

@Directive()
export class UiRadioDirective {
  private _checked: boolean = false;
  private _disabled: boolean = false;
  private _size: string = UiRadioSize.medium;

  @Input('p-label') label?: string;

  @Input('p-name') name?: string;

  @Output('p-click') click = new EventEmitter<null>();

  @Input('p-size') set size(value: string) {
    this._size = value in UiRadioSize ? value : UiRadioSize.medium;
  }

  get size(): string {
    return this._size!;
  }

  @Input('p-disabled') set disabled(value: boolean) {
    this._disabled = <any>value === '' ? true : convertToBoolean(value);
  }

  get disabled(): boolean {
    return this._disabled!;
  }

  @Input('p-checked') set checked(value: boolean) {
    this._checked = <any>value === '' ? true : convertToBoolean(value);
  }

  get checked(): boolean {
    return this._checked!;
  }
}
