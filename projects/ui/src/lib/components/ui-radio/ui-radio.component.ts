import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { UiRadioDirective } from './ui-radio.directive';

@Component({
  selector: 'ui-radio',
  templateUrl: './ui-radio.component.html',
  styleUrls: ['./ui-radio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiRadioComponent extends UiRadioDirective {
  @ViewChild('radio', { static: true }) radio!: ElementRef;

  focus(): void {
    if (!this.disabled) {
      this.radio.nativeElement.focus();
    }
  }
}
