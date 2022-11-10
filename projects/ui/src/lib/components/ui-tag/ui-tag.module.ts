import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiIconModule } from '../ui-icon';
import { UiTagComponent } from './ui-tag.component';

@NgModule({
  imports: [
    CommonModule,
    UiIconModule
  ],
  declarations: [
    UiTagComponent
  ],
  exports: [
    UiTagComponent
  ]
})
export class UiTagModule { }
