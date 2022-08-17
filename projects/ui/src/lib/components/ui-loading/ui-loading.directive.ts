import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appUiLoading]'
})
export class UiLoadingDirective {
  @Input('p-text') text?: string = 'Carregando';
}
