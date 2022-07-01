import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiButtonModule } from '../ui-button';
import { UiButtonGroupComponent } from './ui-button-group.component';

@NgModule({
  imports: [
    CommonModule,
    UiButtonModule
  ],
  declarations: [
    UiButtonGroupComponent
  ],
  exports: [
    UiButtonGroupComponent,
  ]
})
export class UiButtonGroupModule { }
