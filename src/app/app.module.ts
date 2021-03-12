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
import { ViewChildChildComponent } from './component-communication/parentToChild/view-child-child/view-child-child.component';
import { ViewChildParentComponent } from './component-communication/parentToChild/view-child-parent/view-child-parent.component';

import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';

import { RouterModule } from '@angular/router';
import { Childv3Component } from './childToChildviaService/childv3/childv3.component';
import { Childv4Component } from './childToChildviaService/childv4/childv4.component';
import { Parentv5Component } from './childToChildviaService/parentv5/parentv5.component';
import { HighlightDirective } from './custom-directives/highlight.directive';
import { DirectiveExampleComponent } from './custom-directives/directive-example/directive-example.component';
import { PipeExamplesComponent } from './pipes/pipe-examples/pipe-examples.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Child2Component,
    Parent2Component,
    Child1Component,
    ViewChildChildComponent,
    ViewChildParentComponent,
    NewsComponent,
    Childv3Component,
    Childv4Component,
    Parentv5Component,
    HighlightDirective,
    DirectiveExampleComponent,
    PipeExamplesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
    
  ],
  providers: [],
  exports: [AppRoutingModule, NewsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
