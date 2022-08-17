import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiLoadingIconComponent } from './ui-loading-icon/ui-loading-icon.component';
import { UiLoadingComponent } from './ui-loading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UiLoadingComponent,
    UiLoadingIconComponent
  ],
  exports: [
    UiLoadingComponent,
    UiLoadingIconComponent
  ]
})
export class UiLoadingModule { }
