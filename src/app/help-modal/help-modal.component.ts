import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-help-modal',
  templateUrl: './help-modal.component.html',
  styleUrls: ['./help-modal.component.css']
})
export class HelpModalComponent implements OnInit, AfterViewInit {
  @ViewChild('launcher') launcher: ElementRef
  @Output() onClose = new EventEmitter<boolean>();
  pdfSrc:string;
  constructor() { 
  }

  ngAfterViewInit(){
    this.launcher.nativeElement.click();
  }
  ngOnInit() {
    this.pdfSrc = "https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf";
  }
  close() {
    this.onClose.emit(false);
  }

}