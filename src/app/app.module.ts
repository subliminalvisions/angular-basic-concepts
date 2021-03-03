import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './component-communication/parentToChild/parent/parent.component';
import { ChildComponent } from './component-communication/parentToChild/child/child.component';
import { Child2Component } from './component-communication/childToParent/child2/child2.component';
import { Parent2Component } from './component-communication/childToParent/parent2/parent2.component';
import { Child1Component } from './component-communication/childToParent/child1/child1.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Child2Component,
    Parent2Component,
    Child1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
