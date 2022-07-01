import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiRadioComponent } from './ui-radio.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UiRadioComponent,
  ],
  exports: [
    UiRadioComponent
  ]
})
export class UiRadioModule { }
