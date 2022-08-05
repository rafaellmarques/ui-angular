import { NgModule } from "@angular/core";
import { UiButtonModule } from "./ui-button";
import { UiIconModule } from "./ui-icon";

@NgModule({
  imports: [
    UiButtonModule,
    UiIconModule
  ],
  exports: [
    UiButtonModule,
    UiIconModule
  ]
})
export class UiComponentsModule { }
