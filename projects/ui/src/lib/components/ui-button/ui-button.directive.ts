import { Directive, EventEmitter, HostBinding, Input, Output, TemplateRef } from '@angular/core';
import { convertToBoolean } from '../../utils/util';
import { UiButtonKind } from './ui-button-kind.enum';
import { UiButtonSize } from './ui-button-size.enum';
import { UiButtonType } from './ui-button-type.enum';

@Directive()
export class UiButtonDirective {
  private _danger?: boolean = false;
  private _disabled?: boolean = false;
  private _kind?: string = UiButtonKind.secondary;
  private _size?: string = UiButtonSize.medium;
  private _type?: string = UiButtonType.button;

  @Input('p-icon') icon?: string | TemplateRef<void>;

  @Input('p-label') label?: string;

  @Output('p-click') click = new EventEmitter<null>();

  @HostBinding('attr.p-type')
  @Input('p-type') set type(value: string) {
    this._type = value in UiButtonType ? value : UiButtonType.button;
  }

  get type(): string {
    return this._type!;
  }

  @HostBinding('attr.p-size')
  @Input('p-size') set size(value: string) {
    this._size = value in UiButtonSize ? value : UiButtonSize.medium;
  }

  get size(): string {
    return this._size!;
  }

  @HostBinding('attr.p-kind')
  @Input('p-kind') set kind(value: string) {
    this._kind = value in UiButtonKind ? value : UiButtonKind.secondary;
  }

  get kind(): string {
    return this._kind!;
  }

  @Input('p-disabled') set disabled(value: boolean) {
    this._disabled = <any>value === '' ? true : convertToBoolean(value);
  }

  get disabled(): boolean {
    return this._disabled!;
  }

  @Input('p-danger') set danger(value: boolean | string | undefined) {
    const isTertiary = this.kind === UiButtonKind.tertiary;
    const isDanger = isTertiary ? false : convertToBoolean(value);
    this._danger = isDanger;
  }

  get danger(): boolean {
    return this._danger!;
  }
}
