import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiContainerComponent } from './ui-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UiContainerComponent
  ],
  exports: [
    UiContainerComponent
  ]
})
export class UiContainerModule { }
