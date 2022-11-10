import { Component, Input } from '@angular/core';
import { UiDividerSize } from './enum/ui-divider-size.enum';

@Component({
  selector: 'ui-divider',
  templateUrl: './ui-divider.component.html',
  styleUrls: ['./ui-divider.component.css']
})
export class UiDividerComponent {
  rx: number = 1;
  private _lineWidth: string = UiDividerSize.Small;

  @Input('p-label') label?: string;

  @Input('p-lineWidth') set lineWidth(value: string) {
    switch (value) {
      case 'Small':
        this._lineWidth = UiDividerSize.Small;
        this.rx = 1;
        break;
      case 'Medium':
        this._lineWidth = UiDividerSize.Medium;
        this.rx = 1;
        break;
      case 'Large':
        this._lineWidth = UiDividerSize.Large;
        this.rx = 2;
        break;
      default:
        this._lineWidth = UiDividerSize.Small;
        this.rx = 1;
        break;
    }
  }

  get lineWidth(): string {
    return this._lineWidth;
  }
}
