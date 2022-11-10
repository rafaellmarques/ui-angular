import { Component, Input } from '@angular/core';
import { convertToBoolean } from '../../utils/util';

@Component({
  selector: 'ui-container',
  templateUrl: './ui-container.component.html',
  styleUrls: ['./ui-container.component.css']
})
export class UiContainerComponent {
  private _height?: number | string;
  private _noBorder: boolean = false;
  private _noPadding: boolean = false;
  private _noShadow: boolean = false;

  @Input('p-no-shadow') set noShadow(value: boolean) {
    this._noShadow = convertToBoolean(value);
  }

  get noShadow(): boolean {
    return this._noShadow;
  }

  @Input('p-no-padding') set noPadding(value: boolean) {
    this._noPadding = convertToBoolean(value);
  }

  get noPadding(): boolean {
    return this._noPadding;
  }

  @Input('p-no-border') set noBorder(value: boolean) {
    this._noBorder = convertToBoolean(value);
  }

  get noBorder(): boolean {
    return this._noBorder;
  }

  @Input('p-height') set height(value: number | string) {
    this._height = value;
  }

  get height(): number | string {
    return this._height!;
  }
}
