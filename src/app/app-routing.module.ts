import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import {ParentComponent} from './component-communication/parentToChild/parent/parent.component'; 
import {ViewChildParentComponent} from './component-communication/parentToChild/view-child-parent/view-child-parent.component';
import {Parent2Component} from './component-communication/childToParent/parent2/parent2.component';
import { Parentv5Component } from './childToChildviaService/parentv5/parentv5.component';
import { DirectiveExampleComponent } from './custom-directives/directive-example/directive-example.component';
import { PipeExamplesComponent } from './pipes/pipe-examples/pipe-examples.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { MultiStepFormHolderComponent } from './forms/multi-step-form/multi-step-form-holder.component';
import { ConditionalFormFieldsComponent } from './forms/conditional-form-fields/conditional-form-fields.component';

const routes: Routes = [
  {path:'news', component: NewsComponent},
  {path:'parent-down', component: ParentComponent},
  {path: 'parent-viewchild', component: ViewChildParentComponent},
  {path: 'child-up', component: Parent2Component},
  {path: 'child-to-child', component: Parentv5Component},
  {path: 'directive-example', component: DirectiveExampleComponent},
  {path: 'pipe-examples1', component: PipeExamplesComponent},
  {path:'forms', component: ReactiveFormsComponent},
  {path:'multi-step-form', component: MultiStepFormHolderComponent},
  {path:'conditional-form', component: ConditionalFormFieldsComponent}
  // {path: 'data-to-service', component: dataToServiceParentComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
