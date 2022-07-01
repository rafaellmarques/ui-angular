import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { UiTagDirective } from './ui-tag.directive';

@Component({
  selector: 'ui-tag',
  templateUrl: './ui-tag.component.html',
  styleUrls: ['./ui-tag.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiTagComponent extends UiTagDirective {
  @ViewChild('tag', { static: true }) tag!: ElementRef;
  @ViewChild('tagClose', { static: true }) tagClose!: ElementRef;
}
