import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputListComponentComponent } from './input-list-component/input-list-component.component';
import { FormPlaceholderComponent } from './form-placeholder/form-placeholder.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    InputListComponentComponent,
    FormPlaceholderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicFormModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
