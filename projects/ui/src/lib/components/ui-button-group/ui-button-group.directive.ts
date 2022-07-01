import { Directive, HostBinding, Input } from '@angular/core';
import { UiButtonGroupItem } from './ui-button-group-item.interface';
import { UiButtonGroupSize } from './ui-button-group-size.enum';
import { UiButtonGroupToggle } from './ui-button-group-toggle.enum';

@Directive()
export class UiButtonGroupDirective {
  private _size?: string = UiButtonGroupSize.medium;
  private _toggle: string = UiButtonGroupToggle.none;

  @Input('p-buttons') buttons: Array<UiButtonGroupItem> = [];

  @HostBinding('attr.p-toggle')
  @Input('p-toggle') set toggle(value: string) {
    this._toggle = value in UiButtonGroupToggle ? value : UiButtonGroupToggle.none;

    this.checkSelecteds(this._toggle);
  }

  get toggle(): string {
    return this._toggle;
  }

  @HostBinding('attr.p-size')
  @Input('p-size') set size(value: string) {
    this._size = value in UiButtonGroupSize ? value : UiButtonGroupSize.medium;
  }

  get size(): string {
    return this._size!;
  }

  onButtonClick(buttonClicked: UiButtonGroupItem, buttonIndex: number) {
    if (this.toggle === UiButtonGroupToggle.single) {
      this.buttons.forEach(
        (button, index) => (button.selected = index === buttonIndex ? !buttonClicked.selected : false)
      );
    } else if (this.toggle === UiButtonGroupToggle.multiple) {
      buttonClicked.selected = !buttonClicked.selected;
    }
  }

  private checkSelecteds(toggleMode: string) {
    if (toggleMode === UiButtonGroupToggle.none) {
      this.deselectAllButtons();
    } else if (toggleMode === UiButtonGroupToggle.single) {
      const hasMoreOneSelected = this.buttons.filter(button => button.selected).length > 1;
      if (hasMoreOneSelected) {
        this.deselectAllButtons();
      }
    }
  }

  private deselectAllButtons() {
    this.buttons.forEach(button => (button.selected = false));
  }
}

