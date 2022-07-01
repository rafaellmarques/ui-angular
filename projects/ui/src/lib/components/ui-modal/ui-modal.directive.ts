import { Directive, Input, TemplateRef } from '@angular/core';

import { UiModalSize } from './ui-modal-size.enum';

@Directive()
export class UiModalDirective {
  isVisible: boolean = false;

  private _size: string = UiModalSize.medium;

  @Input('p-icon') icon?: string | TemplateRef<void>;

  @Input('p-title') title?: string;

  @Input('p-size') set size(value: string) {
    this._size = value in UiModalSize ? value : UiModalSize.medium;
  }

  get size(): string {
    return this._size!;
  }

  /** Função para abrir a modal. */
  open(): void {
    this.isVisible = true;
  }

  /** Função para fechar a modal. */
  close(): void {
    this.isVisible = false;
  }
}
