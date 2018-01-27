import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TuiService } from 'ngx-tui-editor';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {
  @ViewChild('downloader') downloader:ElementRef
  options: object
  textURI = null;
  constructor(private editorService:TuiService) { }

  ngOnInit() {
    this.options = {
            initialValue: `# Title of Project` ,
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            height: 'auto',
            minHeight: '500px'
          }
  }
  async save(){
    await this.createFile();

  }
  createFile(){
    let textBlob = new Blob([this.editorService.getMarkdown()], { type: 'text/plain' });
    this.textURI = URL.createObjectURL(textBlob);
    this.downloader.nativeElement.href = this.textURI;
    this.downloader.nativeElement.click()

  }

}
