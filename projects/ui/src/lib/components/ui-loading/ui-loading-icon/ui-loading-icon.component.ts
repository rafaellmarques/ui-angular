import { Component, Input } from '@angular/core';
import { convertToBoolean } from '../../../utils/util';

type UiLoadingIconSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'ui-loading-icon',
  templateUrl: './ui-loading-icon.component.html',
  styleUrls: ['./ui-loading-icon.component.css']
})
export class UiLoadingIconComponent {
  private _neutralColor?: boolean;
  private _size?: UiLoadingIconSize = 'medium';

  @Input('p-size') set size(value: UiLoadingIconSize) {
    this._size = value;
  }

  get size(): UiLoadingIconSize {
    return this._size!;
  }

  @Input('p-neutral-color') set neutralColor(value: boolean) {
    this._neutralColor = convertToBoolean(value);
  }

  get neutralColor(): boolean {
    return this._neutralColor!;
  }
}
