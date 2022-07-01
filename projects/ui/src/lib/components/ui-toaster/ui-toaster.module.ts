import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiButtonModule } from '../ui-button';
import { UiIconModule } from '../ui-icon';
import { UiToasterComponent } from './ui-toaster.component';

@NgModule({
  imports: [
    CommonModule,
    UiButtonModule,
    UiIconModule
  ],
  declarations: [
    UiToasterComponent,
  ],
  exports: [
    UiToasterComponent,
  ]
})
export class UiToasterModule { }
