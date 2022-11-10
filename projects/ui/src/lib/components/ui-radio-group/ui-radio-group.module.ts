import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiLabelModule } from '../ui-label';
import { UiRadioGroupComponent } from './ui-radio-group.component';
import { UiRadioComponent } from './ui-radio/ui-radio.component';

@NgModule({
  imports: [
    CommonModule,
    UiLabelModule
  ],
  declarations: [
    UiRadioComponent,
    UiRadioGroupComponent
  ],
  exports: [
    UiRadioComponent,
    UiRadioGroupComponent
  ]
})
export class UiRadioGroupModule { }
