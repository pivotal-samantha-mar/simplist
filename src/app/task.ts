export class Task {
  task: string;
  due: string;
  isComplete: boolean;

  constructor (task: string, due: string) {
    this.task = task;
    this.due = due;
    this.isComplete = false; 
  }
}
