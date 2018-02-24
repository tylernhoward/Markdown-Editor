import { TuiService } from 'ngx-tui-editor';
import { ValueUpdaterService } from './../services/value-updater.service';
import { Component, OnInit, ElementRef, ChangeDetectorRef, Input, Output, EventEmitter, HostListener, OnDestroy } from '@angular/core';
import { ComponentCanDeactivate } from './../services/pending-changes.guard';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit,OnDestroy, ComponentCanDeactivate {
  options: object
  height: number;
  @Input()text: string;
  constructor(private editorService: TuiService, private valueUpdater: ValueUpdaterService) {

  }
  ngOnInit() {
    this.height = window.innerHeight - 150;
    this.options = {
            initialValue: this.text ? this.text : `# Title of Project` ,
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            height: 'auto',
            minHeight: this.height
          }
  }
  ngOnDestroy(){
    console.log(this.editorService.getMarkdown());
    this.valueUpdater.emitText(this.editorService.getMarkdown());
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
}