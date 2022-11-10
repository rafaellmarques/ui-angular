import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiLabelModule } from '../ui-label';
import { UiDividerComponent } from './ui-divider.component';

@NgModule({
  imports: [
    CommonModule,
    UiLabelModule
  ],
  declarations: [
    UiDividerComponent
  ],
  exports: [
    UiDividerComponent
  ]
})
export class UiDividerModule { }
