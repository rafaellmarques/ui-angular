import { NgModule } from '@angular/core';
import { UiButtonGroupModule } from './ui-button-group';
import { UiButtonModule } from './ui-button/ui-button.module';
import { UiIconModule } from './ui-icon/ui-icon.module';
import { UiModalModule } from './ui-modal/ui-modal.module';
import { UiRadioModule } from './ui-radio/ui-radio.module';
import { UiTagModule } from './ui-tag';
import { UiToasterModule } from './ui-toaster';

@NgModule({
  imports: [
    UiButtonModule,
    UiButtonGroupModule,
    UiIconModule,
    UiModalModule,
    UiRadioModule,
    UiTagModule,
    UiToasterModule
  ],
  exports: [
    UiButtonModule,
    UiButtonGroupModule,
    UiIconModule,
    UiModalModule,
    UiRadioModule,
    UiTagModule,
    UiToasterModule
  ]
})
export class UiComponentsModule { }
