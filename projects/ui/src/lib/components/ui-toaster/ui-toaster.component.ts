import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { UiButtonComponent } from '../ui-button';
import { UiToasterType } from './ui-toaster-type.enum';
import { UiToasterDirective } from './ui-toaster.directive';

@Component({
  selector: 'ui-toaster',
  templateUrl: './ui-toaster.component.html',
  styleUrls: ['./ui-toaster.component.css']
})
export class UiToasterComponent extends UiToasterDirective implements OnInit {
  @ViewChild('toaster', { static: true }) toaster!: ElementRef;
  @ViewChild('toasterClose', { static: true }) toasterClose!: UiButtonComponent;

  pageWidth: number = document.body.offsetWidth;

  private observableOnClose = new Subject<any>()

  ngOnInit(): void {
    this.setIconType(this.type);
    this.setTimeout(this.type);
  }

  onButtonClose(): void {
    console.log('onButtonClose');

    // this.close();
  }

  private close(): void {
    this.observableOnClose.next(true);
  }

  private setIconType(type: string): void {
    switch (type) {
      case 'error':
        this.icon = 'fa-solid fa-circle-xmark'
        break;
      case 'info':
        this.icon = 'fa-solid fa-circle-info'
        break;
      case 'success':
        this.icon = 'fa-solid fa-circle-check'
        break;
      case 'warning':
        this.icon = 'fa-solid fa-circle-exclamation'
        break;
    }
  }

  private setTimeout(type: string): void {
    if (type !== UiToasterType.error) {
      setTimeout(() => {
        this.close();
      }, this.timeout);
    }
  }
}

