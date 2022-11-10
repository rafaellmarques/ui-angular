import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiLabelModule } from '../ui-label';
import { UiCheckboxComponent } from './ui-checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    UiLabelModule
  ],
  declarations: [
    UiCheckboxComponent
  ],
  exports: [
    UiCheckboxComponent
  ]
})
export class UiCheckboxModule { }
