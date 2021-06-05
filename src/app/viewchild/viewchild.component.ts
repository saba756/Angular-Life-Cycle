import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {
  scienceteacher:string="Rida";
  mathteacher:string="Aleena";
  physicsteacher:string="Saba";
  constructor() { }

  ngOnInit() {
  }
}
