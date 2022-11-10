import { ChangeDetectionStrategy, Component, DoCheck, ElementRef, forwardRef, ViewChild } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UiRadioGroupDirective } from './ui-radio-group.directive';

@Component({
  selector: 'ui-radio-group',
  templateUrl: './ui-radio-group.component.html',
  styleUrls: ['./ui-radio-group.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      multi: true,
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => UiRadioGroupComponent)
    },
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiRadioGroupComponent)
    }
  ]
})
export class UiRadioGroupComponent extends UiRadioGroupDirective implements DoCheck {
  @ViewChild('radioGroup', { static: true }) radioGroup!: ElementRef;

  ngDoCheck() {
    this.setGridColumn();
  }

  private setGridColumn() {
    switch (this.columns) {
      case 1:
        this.radioGroup.nativeElement.classList.add('teste');
        break;

      default:
        break;
    }
  }
}
