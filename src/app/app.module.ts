import { ModalModule } from 'ngx-modal';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TuiModule} from 'ngx-tui-editor';
import {PopoverModule} from 'ngx-popover';
import { AppComponent } from './app.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { HeaderComponent } from './header/header.component';
import { ControlButtonsComponent } from './control-buttons/control-buttons.component';
import { FormsModule } from '@angular/forms';
import { ValueUpdaterService } from './services/value-updater.service';
import { PendingChangesGuard } from './services/pending-changes.guard';
import { HelpModalComponent } from './help-modal/help-modal.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { TextFormComponent } from './text-form/text-form.component';

export const routes: Routes = [
  { path: '', component: TextEditorComponent, canDeactivate: [PendingChangesGuard] },
];
@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    HeaderComponent,
    ControlButtonsComponent,
    HelpModalComponent,
    TextFormComponent
],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    TuiModule,
    PopoverModule,
    ModalModule,
    PdfViewerModule
  ],
  providers: [ValueUpdaterService,PendingChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
