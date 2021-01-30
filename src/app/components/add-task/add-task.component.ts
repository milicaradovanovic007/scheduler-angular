import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  task = {
    name: '',
    recurrency: '',
    code: '',
  };

  submitted = false;
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  saveTask(): void {
    const data = {
      name: this.task.name,
      recurrency: this.task.recurrency,
      code: this.task.code,
    };

    this.taskService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newTask(): void {
    this.submitted = false;
    this.task = {
      name: '',
      recurrency: '',
      code: '',
    };
  }
}
