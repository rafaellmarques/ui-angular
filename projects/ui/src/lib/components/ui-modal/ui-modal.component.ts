import { Component, ElementRef, ViewChild } from '@angular/core';
import { UiModalDirective } from './ui-modal.directive';

@Component({
  selector: 'ui-modal',
  templateUrl: './ui-modal.component.html',
  styleUrls: ['./ui-modal.component.css']
})
export class UiModalComponent extends UiModalDirective {
  @ViewChild('modal', { static: true }) modal!: ElementRef;
  @ViewChild('dialog', { static: true }) dialog!: ElementRef;
}
