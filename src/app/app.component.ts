import { Component } from '@angular/core';
import { Task } from 'app/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasks: Task[];

  getTodo(todo: Task[]) {
    this.tasks = todo;
    console.log(this.tasks);
  }



}
