import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiContainerModule } from '../ui-container';
import { UiImageComponent } from './ui-image.component';

@NgModule({
  imports: [
    CommonModule,
    UiContainerModule
  ],
  declarations: [
    UiImageComponent
  ],
  exports: [
    UiImageComponent
  ]
})
export class UiImageModule { }
