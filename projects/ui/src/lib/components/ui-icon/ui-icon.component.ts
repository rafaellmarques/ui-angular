import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';

type UiIconSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'ui-icon',
  templateUrl: './ui-icon.component.html',
  styleUrls: ['./ui-icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiIconComponent {
  className!: string;

  private _icon!: string | TemplateRef<void>;
  private _size?: UiIconSize = 'medium';

  @Input('p-icon') set icon(value: string | TemplateRef<void>) {
    if (typeof value === 'string') {
      this.addClass(value);
    } else if (value instanceof TemplateRef) {
      this._icon = value;
    }
  }

  get icon() {
    return this._icon;
  }

  @Input('p-size') set size(value: UiIconSize) {
    this._size = value;
  }

  get size() {
    return this._size!;
  }

  private addClass(value: string) {
    this.className = value;
  }
}
