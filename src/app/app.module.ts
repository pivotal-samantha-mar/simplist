import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { DisplayTasksComponent } from './display-tasks/display-tasks.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewTaskComponent,
    DisplayTasksComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
