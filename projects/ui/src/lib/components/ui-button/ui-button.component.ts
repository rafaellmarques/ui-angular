import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { UiButtonDirective } from './ui-button.directive';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiButtonComponent extends UiButtonDirective {
  @ViewChild('button', { static: true }) button!: ElementRef;

  focus(): void {
    if (!this.disabled) {
      this.button.nativeElement.focus();
    }
  }

  onClick(): void {
    this.click.emit(null);
  }
}
