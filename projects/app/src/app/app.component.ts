import { Component } from '@angular/core';
import { UiButtonGroupItem } from '../../../ui/src/lib/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  buttons: Array<UiButtonGroupItem> = [
    { label: 'Button 1', action: this.action.bind(this) },
    { label: 'Button 2', action: this.action.bind(this) },
    { label: 'Button 3', action: this.action.bind(this) }
  ];

  action(button: any) {
    alert(`${button.label}`);
  }
}
