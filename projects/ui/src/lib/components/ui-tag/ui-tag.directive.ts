import { Directive, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { convertToBoolean } from '../../utils/util';
import { UiTagType } from './enum/ui-tag-type.enum';

@Directive()
export class UiTagDirective {
  private _disabled: boolean = false;
  private _label!: string;
  private _removable: boolean = false;
  private _type: string = UiTagType.Neutral;

  @Input('p-type') set type(value: string) {
    const type = this.removable ? UiTagType.Neutral : value;
    this._type = type in UiTagType ? type.toLowerCase() : UiTagType.Neutral;
  }

  get type(): string {
    return this._type;
  }

  @Input('p-removable') set removable(value: boolean) {
    this._removable = <any>value === '' ? true : convertToBoolean(value);
  }

  get removable(): boolean {
    return this._removable;
  }

  @Input('p-label') set label(value: string) {
    this._label = value;
  }

  get label(): string {
    return this._label;
  }

  @Input('p-icon') icon?: string | TemplateRef<void>;
  @Input('p-iconClose') iconClose?: string | TemplateRef<void>;

  @Input('p-disabled') set disabled(value: boolean) {
    this._disabled = <any>value === '' ? true : convertToBoolean(value);
  }

  get disabled(): boolean {
    return this._disabled;
  }

  @Output('p-click') click: EventEmitter<null> = new EventEmitter<null>();
}
