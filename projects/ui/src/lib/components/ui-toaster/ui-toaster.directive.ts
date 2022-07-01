import { Directive, Input, TemplateRef } from '@angular/core';
import { UiToasterType } from './ui-toaster-type.enum';

@Directive()
export class UiToasterDirective {
  private _message!: string;
  private _timeout: number = 9000;
  private _type: string = UiToasterType.success;

  @Input('p-action') action?: Function;

  @Input('p-action-label') actionLabel?: string;

  @Input('p-icon') icon?: string | TemplateRef<void>;

  @Input('p-type') set type(value: string) {
    this._type = value in UiToasterType ? value : UiToasterType.success;
  }

  get type(): string {
    return this._type!;
  }

  @Input('p-timeout') set timeout(value: number) {
    this._timeout = value;
  }

  get timeout(): number {
    return this._timeout;
  }

  @Input('p-message') set message(value: string) {
    this._message = value ?? '';
  }

  get message(): string {
    return this._message!;
  }
}
