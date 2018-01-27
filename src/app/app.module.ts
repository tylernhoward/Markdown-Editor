import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TuiModule} from 'ngx-tui-editor';

import { AppComponent } from './app.component';
import { TextEditorComponent } from './text-editor/text-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent
  ],
  imports: [
    BrowserModule,
    TuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
