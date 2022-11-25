import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiLinkComponent } from './ui-link.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UiLinkComponent
  ],
  exports: [
    UiLinkComponent
  ]
})
export class UiLinkModule { }
