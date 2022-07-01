import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiIconModule } from '../ui-icon';
import { UiButtonComponent } from './ui-button.component';

@NgModule({
  imports: [
    CommonModule,
    UiIconModule
  ],
  declarations: [
    UiButtonComponent
  ],
  exports: [
    UiButtonComponent
  ]
})
export class UiButtonModule { }
