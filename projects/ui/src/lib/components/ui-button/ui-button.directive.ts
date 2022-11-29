import { Directive, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { convertToBoolean } from '../../utils/util';

export type UiButtonKind = 'primary' | 'secondary' | 'tertiary';
export type UiButtonSize = 'large' | 'medium' | 'small';

@Directive()
export class UiButtonDirective {
  private _danger: boolean = false;
  private _disabled: boolean = false;
  private _kind?: UiButtonKind = 'secondary';
  private _loading: boolean = false;
  private _size: UiButtonSize = 'medium';

  @Input('p-icon') icon?: string | TemplateRef<void>;

  @Input('p-label') label?: string;

  @Input('p-size') set size(value: UiButtonSize) {
    this._size = value;
  }

  get size(): UiButtonSize {
    return this._size;
  }

  @Input('p-loading') set loading(value: boolean) {
    this._loading = convertToBoolean(value);
  }

  get loading(): boolean {
    return this._loading!;
  }

  @Input('p-kind') set kind(value: UiButtonKind) {
    this._kind = value;
  }

  get kind(): UiButtonKind {
    return this._kind!;
  }

  @Input('p-disabled') set disabled(value: boolean) {
    this._disabled = <any>value === '' ? true : convertToBoolean(value);
  }

  get disabled(): boolean {
    return this._disabled!;
  }

  @Input('p-danger') set danger(value: boolean | string | undefined) {
    this._danger = this.kind === 'tertiary' ? false : convertToBoolean(value);
  }

  get danger(): boolean {
    return this._danger!;
  }

  @Output('p-click') click: EventEmitter<null> = new EventEmitter<null>();
}
