import { Directive, HostBinding, Input } from '@angular/core';
import { convertToBoolean, removeDuplicatedOptions } from '../../utils/util';
import { UiRadioGroupInterface } from './ui-radio-group-interface';

type UiRadioGroupSize = 'medium' | 'large';

@Directive()
export class UiRadioGroupDirective {
  private _checked: boolean = false;
  private _columns?: number;
  private _disabled: boolean = false;
  private _label?: string;
  private _options!: Array<UiRadioGroupInterface>;
  private _required: boolean = false;
  private _size: UiRadioGroupSize = 'medium';

  @Input('p-size') set size(value: UiRadioGroupSize) {
    this._size = value;
  }

  get size(): UiRadioGroupSize {
    return this._size;
  }

  @Input('p-required') set required(value: boolean) {
    this._required = <any>value === '' ? true : convertToBoolean(value);
  }

  get required(): boolean {
    return this._required!;
  }

  @Input('p-options') set options(value: Array<UiRadioGroupInterface>) {
    this._options = value;
    removeDuplicatedOptions(this.options);
  }

  get options() {
    return this._options;
  }

  @Input('p-name') name!: string;

  @Input('p-label') set label(value: string) {
    this._label = value;
  }

  get label(): string {
    return this._label!;
  }

  @Input('p-disabled') set disabled(value: boolean) {
    this._disabled = <any>value === '' ? true : convertToBoolean(value);
  }

  get disabled(): boolean {
    return this._disabled!;
  }

  @HostBinding('attr.p-columns')
  @Input('p-columns') set columns(value: number) {
    this._columns = value >= 1 && value <= 4 ? value : 1;
  }

  get columns(): number {
    return this._columns!;
  }

  @Input('p-checked') set checked(value: boolean) {
    this._checked = convertToBoolean(value);
  }

  get checked(): boolean {
    return this._checked!;
  }
}
