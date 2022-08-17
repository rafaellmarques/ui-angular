import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiCardComponent } from './ui-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UiCardComponent
  ],
  exports: [
    UiCardComponent
  ]
})
export class UiCardModule { }
