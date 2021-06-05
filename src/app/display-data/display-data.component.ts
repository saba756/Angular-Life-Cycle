import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ViewchildComponent } from '../viewchild/viewchild.component';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css'],
})
export class DisplayDataComponent implements OnInit {
  @ViewChild(ViewchildComponent, { static: false })
  teacher!: ViewchildComponent;
  schscienceteacher: string = '';
  @ViewChild('div', { static: false }) element!: ElementRef;
  @ViewChild('work', { static: false }) userelement!: ElementRef;
  constructor(private changedetect: ChangeDetectorRef) {}
  ngOnInit() {
    //console.log(this.teacher.scienceteacher);
  }
  ngAfterViewInit() {
    this.schscienceteacher = this.teacher.scienceteacher;
    this.userelement.nativeElement.style.backgroundColor = 'blue';
    console.log(this.teacher.scienceteacher);
    console.log(this.userelement);
    this.element.nativeElement.style.display = 'none';
    this.changedetect.detectChanges();
  }
}
