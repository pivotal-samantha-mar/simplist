import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'app/task';

@Component({
  selector: 'app-display-tasks',
  templateUrl: './display-tasks.component.html',
  styleUrls: ['./display-tasks.component.css']
})
export class DisplayTasksComponent implements OnInit {

  @Input() tasks: Task[];
  opacity = "0%";

  constructor() { }

  ngOnInit() {
  }

  onComplete() {
    this.opacity = "10%"
  }


}
