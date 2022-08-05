import { Directive, EventEmitter, HostBinding, Input, Output, TemplateRef } from '@angular/core';
import { convertToBoolean } from '../../utils/util';

type UiButtonKind = 'primary' | 'secondary' | 'tertiary';
type UiButtonSize = 'small' | 'medium' | 'large';
type UiButtonType = 'button' | 'submit' | 'reset';

@Directive()
export class UiButtonDirective {
  private _danger?: boolean = false;
  private _disabled?: boolean = false;
  private _kind?: UiButtonKind = 'secondary';
  private _size?: UiButtonSize = 'medium';
  private _type?: UiButtonType = 'button';

  @Input('p-icon') icon?: string | TemplateRef<void>;

  @Input('p-label') label?: string;

  @Output('p-click') click = new EventEmitter<null>();

  @Input('p-type') set type(value: UiButtonType) {
    this._type = value;
  }

  get type(): UiButtonType {
    return this._type!;
  }

  @HostBinding('attr.p-size')
  @Input('p-size') set size(value: UiButtonSize) {
    this._size = value;
  }

  get size(): UiButtonSize {
    return this._size!;
  }

  @HostBinding('attr.p-kind')
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
}
