import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnChanges,
  DoCheck,
AfterContentInit,
AfterContentChecked
// AfterViewInit,
// AfterViewChecked,
// OnDestroy
{
  @Input() myValue = '';
  counter: any;
  num: number= 1;
  department : string = ""
  @ContentChild(ParentComponent) MessageComponnetContentChild!: ParentComponent;
  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called', changes);
    // if (changes.myValue.currentValue !== changes.myValue.previousValue){
    // this.department = "user Changed"
    // }else {
    //   this.department = "notC Changed"
    // }
    //console.log("ngOnChanges values", changes.myValue.previousValue);
  }

  ngOnInit(): void {
    console.log('ngOnInit called',this.MessageComponnetContentChild);
    // this.counter = setInterval(() => {
    //   this.num= this.num + 1;
    //   console.log(this.num)
    // },1000)
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called',this.MessageComponnetContentChild);
  }
  ngAfterContentChecked(): void  {
    console.log('ngAfterContentCheck called');
   }
//  ngAfterViewInit(): void {
//   console.log('ngAfterViewInit called');
// }
//  ngAfterViewChecked(): void {
//   console.log('ngAfterViewChecked called');
// }
//  ngOnDestroy(): void {
//   console.log('ngOnDestroy called');
//   clearInterval(this.counter)
// }
}
