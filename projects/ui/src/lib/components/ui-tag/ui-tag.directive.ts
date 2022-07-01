import { Directive, Input, TemplateRef } from '@angular/core';
import { convertToBoolean } from '../../utils/util';
import { UiTagType } from './ui-tag-type.enum';

@Directive()
export class UiTagDirective {
  private _disabled: boolean = false;
  private _removable: boolean = false;
  private _type: string = UiTagType.neutral;

  @Input('p-icon') icon?: string | TemplateRef<void>;

  @Input('p-icon-close') iconClose?: string | TemplateRef<void>;

  @Input('p-label') label?: string;

  @Input('p-type') set type(value: string) {
    this._type = value in UiTagType ? value : UiTagType.neutral;
  }

  get type(): string {
    return this._type!;
  }

  @Input('p-disabled') set disabled(value: boolean) {
    this._disabled = <any>value === '' ? true : convertToBoolean(value);
  }

  get disabled(): boolean {
    return this._disabled!;
  }

  @Input('p-removable') set removable(value: boolean) {
    this._removable = <any>value === '' ? true : convertToBoolean(value);

    if (this._removable) {
      this.type = UiTagType.neutral;
    }
  }

  get removable(): boolean {
    return this._removable!;
  }
}
