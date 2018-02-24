import { ValueUpdaterService } from './../services/value-updater.service';
import { TuiService } from 'ngx-tui-editor';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-control-buttons',
  templateUrl: './control-buttons.component.html',
  styleUrls: ['./control-buttons.component.css']
})
export class ControlButtonsComponent implements OnInit {
  @ViewChild('downloader') downloader: ElementRef;
  @ViewChild('previewer') previewer: ElementRef
  textURI = null;
  fileName: string;
  filePath:string;
  showHelp:boolean;
  constructor(private editorService: TuiService, private valueUpdater: ValueUpdaterService) { }

  ngOnInit() {
    this.showHelp=false;
    this.fileName = "Readme";
    this.valueUpdater.nameObservable.subscribe(value => {
      this.fileName = value;
    });
  }
  onHelpClose(event){
    this.showHelp = false;
  }

  openSettings() {

  }

  save(type) {
    this.addExtension(type)
    this.createFile(type);
    this.downloadFile();
  }
  preview(type) {
    this.createFile(type);
    this.previewFile();
  }

  addExtension(type){
    this.fileName = this.fileName.split(".")[0];
    this.filePath = "";
    switch(type){
      case "html": this.filePath = this.fileName + ".html";break;
      case "markdown": this.filePath = this.fileName + ".md"; break;
      default: this.filePath = this.fileName + ".md";
    }
  }

  private createFile(type) {
    let content = (type === "markdown" ? this.editorService.getMarkdown(): this.editorService.getHtml());
    let textBlob = new Blob([content], { type: 'text/plain' });
    this.textURI = URL.createObjectURL(textBlob);
  }
  private downloadFile(){
    this.downloader.nativeElement.href = this.textURI;
    this.downloader.nativeElement.download = this.filePath;
    this.downloader.nativeElement.click();
  }
  private previewFile() {
    this.previewer.nativeElement.href = this.textURI;
    this.previewer.nativeElement.click();
  }


}
