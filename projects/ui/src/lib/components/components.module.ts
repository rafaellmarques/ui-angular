import { NgModule } from "@angular/core";
import { UiButtonModule } from "./ui-button";
import { UiCardModule } from "./ui-card/ui-card.module";
import { UiIconModule } from "./ui-icon";
import { UiLoadingModule } from "./ui-loading";

@NgModule({
  imports: [
    UiButtonModule,
    UiCardModule,
    UiIconModule,
    UiLoadingModule
  ],
  exports: [
    UiButtonModule,
    UiCardModule,
    UiIconModule,
    UiLoadingModule
  ]
})
export class UiComponentsModule { }
