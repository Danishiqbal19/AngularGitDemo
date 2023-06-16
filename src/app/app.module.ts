import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { EvenComponent } from './even/even.component';
import { EvtentComponent } from './evtent/evtent.component';
import { DirectivesComponent } from './directives/directives.component';
import { EvenoddComponent } from './evenodd/evenodd.component';
import { PracticeComponentComponent } from './practice-component/practice-component.component';
import { TemplateDirvenFormComponent } from './template-dirven-form/template-dirven-form.component';
import { TemplateDrivenWithNgModelComponent } from './template-driven-with-ng-model/template-driven-with-ng-model.component';
import { OneWayDatabindingComponent } from './one-way-databinding/one-way-databinding.component';
import { InbuiltPipeExampleComponent } from './inbuilt-pipe-example/inbuilt-pipe-example.component';
import { TwoWayDatabindingComponent } from './two-way-databinding/two-way-databinding.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { TitlePipe } from './title.pipe';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UsdindPipe } from './src/app/pipe/usdind.pipe';
import { DynamicStyleDirective } from './directivess/dynamic-style.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { PracticeFormComponent } from './practice-form/practice-form.component';
import { ReactiveDrivenFormComponent } from './reactive-driven-form/reactive-driven-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    EvenComponent,
    EvtentComponent,
    DirectivesComponent,
    EvenoddComponent,
    PracticeComponentComponent,
    TemplateDirvenFormComponent,
    TemplateDrivenWithNgModelComponent,
    OneWayDatabindingComponent,
    InbuiltPipeExampleComponent,
    TwoWayDatabindingComponent,
    DatabindingComponent,
    TitlePipe,
    EmployeeListComponent,
    UsdindPipe,
    DynamicStyleDirective,
    ParentComponent,
    ChildComponent,
    TemplateDrivenComponent,
    PracticeFormComponent,
    ReactiveDrivenFormComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
