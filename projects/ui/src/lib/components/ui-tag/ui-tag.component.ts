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

  onClick(): void {
    this.click.emit(null);
    this.remove();
  }

  private remove(): void {
    if (!this.disabled) {
      this.tag.nativeElement.parentElement.remove();
    }
  }
}
