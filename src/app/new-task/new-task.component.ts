import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'app/task';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  todo: Task;
  todoTask: string;
  todoDue: string;

  //Want to emit this
  todos = [];
  @Output() emitTodos: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit() {
  }

  createTask () {
    this.todo = new Task (this.todoTask,this.todoDue);
    this.todos.push(this.todo);
    // console.log(this.todos);

    //Emit todos
    this.emitTodos.emit(this.todos);
    this.clear();
  }

  clear () {
    this.todoTask = '';
    this.todoDue = '';
  }




}
