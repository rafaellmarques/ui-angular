import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { UiCardDirective } from './ui-card.directive';

@Component({
  selector: 'ui-card',
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiCardComponent extends UiCardDirective implements OnInit {
  @ViewChild('card', { static: true }) card!: ElementRef;

  ngOnInit(): void {
    this.setAtrributes();
  }

  isInteractive(): boolean {
    return this.type === 'link' || this.type === 'selectable' ? true : false;
  }

  @HostListener('click', ['$event.target'])
  private onClick(): void {
    if (this.type === 'selectable') {
      this.toggleSelected();
    }
  }

  @HostListener('keydown.space', ['$event.target'])
  private handleKeyDown(event: KeyboardEvent): void {
    if (this.type === 'selectable') {
      this.toggleSelected();
    }
  }

  private setAtrributes(): void {
    if (this.type === 'link') {
      this.card.nativeElement.setAttribute('role', 'link');
      this.card.nativeElement.setAttribute('tabindex', 0);
    }

    if (this.type === 'selectable') {
      this.card.nativeElement.setAttribute('role', 'radio');
      this.card.nativeElement.setAttribute('tabindex', 0);
    }
  }

  private toggleSelected(): void {
    this.selected = !this.selected;
    this.card.nativeElement.setAttribute('aria-checked', this.selected);
  }
}
