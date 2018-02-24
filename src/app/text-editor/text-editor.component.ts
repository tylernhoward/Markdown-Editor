import { TuiService } from 'ngx-tui-editor';
import { ValueUpdaterService } from './../services/value-updater.service';
import { Component, OnInit, ElementRef, ChangeDetectorRef, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { ComponentCanDeactivate } from './../services/pending-changes.guard';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit, ComponentCanDeactivate {
  options: object
  el:HTMLElement
  fileName:string;
  constructor(private cdr: ChangeDetectorRef, private editorService: TuiService, private valueUpdater: ValueUpdaterService) {}
  ngOnInit() {
    this.fileName = "Readme"
    this.options = {
            initialValue: `# Title of Project` ,
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            height: 'auto',
            minHeight: "100%"
          }
  }

  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {
    if(this.editorService.getMarkdown() === this.options["initialValue"]){
      return true;
    }
    else{
      return false;

    }
  }
  updateFileName(event) {
    this.valueUpdater.emit(this.fileName);
  }
}