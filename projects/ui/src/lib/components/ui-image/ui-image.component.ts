import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { UiImageDirective } from './ui-image.directive';

const UI_IMAGE_FORMAT_DEFAULT = ['.bmp', '.gif', '.ico', '.jpg', '.png', '.svg'];

@Component({
  selector: 'ui-image',
  templateUrl: './ui-image.component.html',
  styleUrls: ['./ui-image.component.css']
})
export class UiImageComponent extends UiImageDirective implements AfterViewInit {
  @ViewChild('image', { static: true }) image!: ElementRef;

  constructor(private cdr: ChangeDetectorRef, private renderer: Renderer2) {
    super();
  }

  ngAfterViewInit(): void {
    if (!this.height) {
      this.getImageHeight();
    }

    this.cdr.detectChanges();
  }

  protected getImageHeight(): number {
    const imageHeight = this.image.nativeElement.naturalHeight;
    this.renderer.setAttribute(this.image.nativeElement, 'height', imageHeight);

    return imageHeight;
  }

  protected getImageWidth(): number {
    const imageWidth = this.image.nativeElement.naturalWidth;
    this.renderer.setAttribute(this.image.nativeElement, 'width', imageWidth);

    return imageWidth;
  }

  protected isBase64Image(value: string): boolean {
    return value.includes('base64');
  }

  protected isValidImage(value: string): boolean {
    const imageExtension = value.substring(value.lastIndexOf('.')).toLowerCase();

    return UI_IMAGE_FORMAT_DEFAULT.some(format => format === imageExtension);
  }
}
