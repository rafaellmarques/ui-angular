import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiButtonModule } from '../ui-button';
import { UiModalComponent } from './ui-modal.component';

@NgModule({
  imports: [
    CommonModule,
    UiButtonModule
  ],
  declarations: [
    UiModalComponent
  ],
  exports: [
    UiModalComponent
  ]
})
export class UiModalModule { }
