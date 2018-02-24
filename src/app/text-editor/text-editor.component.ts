import { initialText } from './initialText';
import { TuiService } from 'ngx-tui-editor';
import { ValueUpdaterService } from './../services/value-updater.service';
import { Component, OnInit, ElementRef, ChangeDetectorRef, Input, Output, EventEmitter, HostListener, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { ComponentCanDeactivate } from './../services/pending-changes.guard';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit,OnDestroy,AfterViewInit,ComponentCanDeactivate {
  options: object
  height: number;
  @ViewChild("editor") editor: ElementRef;
  @Input()text: string;
  constructor(private editorService: TuiService, private valueUpdater: ValueUpdaterService) {

  }
  ngOnInit() {
    this.height = window.innerHeight - 150;
    this.options = {
            initialValue: this.text ? this.text : initialText ,
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            height: 'auto',
            minHeight: this.height
          }
  }
  ngAfterViewInit(){
    //this.editor.nativeElement.click()
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