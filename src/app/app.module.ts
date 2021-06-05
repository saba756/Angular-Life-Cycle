import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ContentChildDisplayComponent } from './content-child-display/content-child-display.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ViewchildComponent,
    DisplayDataComponent,
    ContentChildComponent,
    ContentChildDisplayComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
