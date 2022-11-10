import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, HostListener, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UiRadioDirective } from './ui-radio.directive';

@Component({
  selector: 'ui-radio',
  templateUrl: './ui-radio.component.html',
  styleUrls: ['./ui-radio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiRadioComponent)
    }
  ],
  host: {
    '[attr.p-focus]': 'focus'
  }
})
export class UiRadioComponent extends UiRadioDirective {
  @ViewChild('radioLabel', { static: true }) radioLabel!: ElementRef;
  @ViewChild('radioInput', { static: true }) radioInput!: ElementRef;

  @Input() focus: boolean = false;

  @HostListener('keydown.space', ['$event.target'])
  protected handleKeyDown(): void {
    this.toggleChecked();
  }

  @HostListener('click', ['$event.target'])
  protected onClick(): void {
    this.toggleChecked();
  }

  @HostListener('focusin', ['$event.target'])
  protected onFocusIn(): void {
    // this.radioLabel.nativeElement.classList.add('ui-radio-label--focus');
    this.focus = true;
  }

  @HostListener('focusout', ['$event.target'])
  protected onFocusOut(): void {
    // this.radioLabel.nativeElement.removeAttribute('class');
    this.focus = false;
  }

  private toggleChecked(): void {
    if (!this.checked) {
      this.checked = !this.checked;
    }
  }
}
