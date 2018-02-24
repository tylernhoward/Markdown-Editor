import { ValueUpdaterService } from './../services/value-updater.service';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-text-form',
  templateUrl: './text-form.component.html',
  styleUrls: ['./text-form.component.css']
})
export class TextFormComponent implements OnInit {
  fileName: string;
  editorShown: boolean;
  text:string;
  constructor( private valueUpdater: ValueUpdaterService) {
    this.valueUpdater.textObservable.subscribe(value => {
      this.text = value;
    });
  }
  ngOnInit() {
    this.fileName = "README"
    this.editorShown = true;

  }
  @HostListener('window:resize', ['$event'])
  reInitializeEditor(event) {
    this.editorShown = false;
    setTimeout(() => {
      this.editorShown = true;
    }, 1);
  }
 
  updateFileName(event) {
    this.valueUpdater.emitName(this.fileName);
  }
}