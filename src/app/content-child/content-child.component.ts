import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent implements OnInit,AfterContentInit {
@ContentChild('h1tag') msg! :ElementRef;
//@ViewChild('h1tag') msg! :ElementRef;
  constructor() { }
  ngAfterContentInit(): void {
    console.log('hh',this.msg.nativeElement.innerHTML)
    this.msg.nativeElement.style.backgroundColor ='yellow'
  }

  ngOnInit(): void {
    //this.msg.nativeElement.style.backgroundColor ='yellow'
  }
  ButtonEvent()
  {
      alert(this.msg.nativeElement.innerHTML)
  }

}
