import { TemplateRef } from "@angular/core";

export interface UiButtonGroupItem {
  action: Function;
  disabled?: boolean;
  icon?: string | TemplateRef<void>;
  label?: string;
  selected?: boolean;
}
