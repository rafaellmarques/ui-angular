import { Directive, HostBinding, Input } from '@angular/core';

import { Sizes as UiCheckboxSize } from '../../enums/ui-sizes.enum';
import { convertToBoolean } from '../../utils/util';

type UiCheckboxCheckedValue = boolean | 'indeterminate';

@Directive()
export class UiCheckboxDirective {
  private _checked: boolean = false;
  private _disabled: boolean = false;
  private _label?: string;
  private _name?: string;
  private _required: boolean = false;
  private _size: UiCheckboxSize = UiCheckboxSize.Medium;

  @Input('p-size') set size(value: UiCheckboxSize) {
    this._size = value;
  }

  get size(): UiCheckboxSize {
    return this._size;
  }

  @Input('p-required') set required(value: boolean) {
    this._required = <any>value === '' ? true : convertToBoolean(value);
  }

  get required(): boolean {
    return this._required!;
  }

  @Input('p-name') set name(value: string) {
    this._name = value;
  }

  get name(): string {
    return this._name! ?? 'input-checkbox';
  }

  @Input('p-label') set label(value: string) {
    this._label = value;
  }

  get label(): string {
    return this._label!;
  }

  @HostBinding('attr.p-disabled')
  @Input('p-disabled') set disabled(value: boolean) {
    this._disabled = <any>value === '' ? true : convertToBoolean(value);
  }

  get disabled(): boolean {
    return this._disabled!;
  }

  @HostBinding('attr.p-checked')
  @Input('p-checked') set checked(value: UiCheckboxCheckedValue) {
    this._checked = convertToBoolean(value);
  }

  get checked(): UiCheckboxCheckedValue {
    return this._checked!;
  }
}
