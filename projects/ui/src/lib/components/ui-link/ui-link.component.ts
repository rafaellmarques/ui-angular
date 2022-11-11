import { Component, Input } from '@angular/core';
import { convertToBoolean } from '../../utils/util';

@Component({
  selector: 'ui-link',
  templateUrl: './ui-link.component.html',
  styleUrls: ['./ui-link.component.css']
})
export class UiLinkComponent {
  private _openNewTab: boolean = false;

  @Input('p-href') href!: string;

  @Input('p-label') label!: string;

  @Input('p-open-new-tab') set openNewTab(value: boolean) {
    this._openNewTab = convertToBoolean(value);
  }

  get openNewTab(): boolean {
    return this._openNewTab;
  }
}
