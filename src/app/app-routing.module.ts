import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import {ParentComponent} from './component-communication/parentToChild/parent/parent.component'; 
import {ViewChildParentComponent} from './component-communication/parentToChild/view-child-parent/view-child-parent.component';
import {Parent2Component} from './component-communication/childToParent/parent2/parent2.component';

const routes: Routes = [
  {path:'news', component: NewsComponent},
  {path:'parent-down', component: ParentComponent},
  {path: 'parent-viewchild', component: ViewChildParentComponent},
  {path: 'child-up', component: Parent2Component},
  // {path: 'data-to-service', component: dataToServiceParentComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
