import { NgModule } from "@angular/core";
import { UiButtonModule } from "./ui-button";
import { UiCardModule } from "./ui-card/ui-card.module";
import { UiCheckboxModule } from "./ui-checkbox";
import { UiContainerModule } from "./ui-container";
import { UiDividerModule } from "./ui-divider";
import { UiIconModule } from "./ui-icon";
import { UiImageModule } from "./ui-image";
import { UiLabelModule } from "./ui-label";
import { UiLinkModule } from "./ui-link";
import { UiLoadingModule } from "./ui-loading";
import { UiRadioGroupModule } from "./ui-radio-group";
import { UiTagModule } from "./ui-tag";

@NgModule({
  imports: [
    UiButtonModule,
    UiCardModule,
    UiCheckboxModule,
    UiContainerModule,
    UiDividerModule,
    UiIconModule,
    UiImageModule,
    UiLabelModule,
    UiLinkModule,
    UiLoadingModule,
    UiRadioGroupModule,
    UiTagModule
  ],
  exports: [
    UiButtonModule,
    UiCardModule,
    UiCheckboxModule,
    UiContainerModule,
    UiDividerModule,
    UiIconModule,
    UiImageModule,
    UiLabelModule,
    UiLinkModule,
    UiLoadingModule,
    UiRadioGroupModule,
    UiTagModule
  ],
  declarations: []
})
export class UiComponentsModule { }
