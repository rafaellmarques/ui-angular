import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiLabelComponent } from './ui-label.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UiLabelComponent
  ],
  exports: [
    UiLabelComponent
  ]
})
export class UiLabelModule { }
