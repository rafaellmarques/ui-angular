import { Directive, Input } from '@angular/core';

@Directive()
export abstract class UiImageDirective {
  private _alternate?: string;
  private _height?: number | string;
  private _source!: string;

  @Input('p-src') set source(value: string) {
    if (this.isBase64Image(value)) {
      this._source = value;
    } else {
      this._source = this.isValidImage(value) ? value : '';
    }
  }

  get source(): string {
    return this._source;
  }

  @Input('p-height') set height(value: number | string) {
    this._height = value;
  }

  get height(): number | string {
    return this._height!;
  }

  @Input('p-alt') set alternate(value: string) {
    this._alternate = value;
  }

  get alternate(): string {
    return this._alternate!;
  }

  protected abstract getImageHeight(): number;
  protected abstract isBase64Image(source: string): boolean;
  protected abstract isValidImage(source: string): boolean;
}
