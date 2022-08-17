import { Component } from '@angular/core';
import { UiLoadingDirective } from './ui-loading.directive';

@Component({
  selector: 'app-ui-loading',
  templateUrl: './ui-loading.component.html',
  styleUrls: ['./ui-loading.component.css']
})
export class UiLoadingComponent extends UiLoadingDirective { }
