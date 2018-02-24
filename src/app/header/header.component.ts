import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<div class="wrapper">
              <h4>Markdown Editor</h4>
                <app-control-buttons></app-control-buttons>
              </div>`,
  styles: [`.wrapper{
                display: flex;
                flex-direction: row;
                margin-left:50px;
                justify-content: space-between;
            }
            h4 {
                font-size: 20pt;
                letter-spacing: 4px;
            }`]
})
export class HeaderComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
