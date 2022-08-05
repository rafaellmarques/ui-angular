import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiComponentsModule } from 'projects/ui/src/lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
