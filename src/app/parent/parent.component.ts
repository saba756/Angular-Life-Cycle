import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  value: string = '';
  childcompExist: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  SubmitValue(val: any) {
    this.value = val.value;
  }
  // fun(){
  //   console.log("Hi")
  // }
  destroy() {
    this.childcompExist = false;
  }
}
