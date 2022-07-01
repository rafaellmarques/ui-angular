import { Component, ViewContainerRef } from '@angular/core';
import { UiButtonGroupDirective } from './ui-button-group.directive';

@Component({
  selector: 'ui-button-group',
  templateUrl: './ui-button-group.component.html',
  styleUrls: ['./ui-button-group.component.css'],
})
export class UiButtonGroupComponent extends UiButtonGroupDirective {
  constructor(viewContainerRef: ViewContainerRef) {
    super();
  }
}
