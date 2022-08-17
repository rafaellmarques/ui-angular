import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { convertToBoolean } from '../../utils/util';

export type UiCardType = 'link' | 'selectable';

@Directive()
export class UiCardDirective {
  private _href?: string;
  private _selected?: boolean = false;
  private _type?: UiCardType;

  @Output('p-click') click = new EventEmitter<null>();

  @Input('p-type') set type(type: UiCardType) {
    this._type = type;
  }

  get type(): UiCardType {
    return this._type!;
  }

  @Input('p-selected') set selected(value: boolean) {
    this._selected = convertToBoolean(value);
  }

  get selected(): boolean {
    return this._selected!;
  }

  @Input('p-href') set href(value: string) {
    this._href = value;
  }

  get href(): string {
    return this._href!;
  }
}
