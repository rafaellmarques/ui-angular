import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiIconModule } from '../ui-icon';
import { UiLoadingModule } from '../ui-loading';
import { UiButtonComponent } from './ui-button.component';

@NgModule({
  imports: [
    CommonModule,
    UiIconModule,
    UiLoadingModule
  ],
  declarations: [
    UiButtonComponent
  ],
  exports: [
    UiButtonComponent
  ]
})
export class UiButtonModule { }
