import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit {
  currentTask = null;
  message = '';

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getTask(this.route.snapshot.paramMap.get('id'));
  }

  getTask(id): void {
    this.taskService.get(id).subscribe(
      (data) => {
        this.currentTask = data.payload;
        console.log(data.payload);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateTask(): void {
    this.taskService.update(this.currentTask.id, this.currentTask).subscribe(
      (response) => {
        console.log(response);
        this.message = 'The task was updated successfully!';
        this.router.navigate(['/tasks']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteTask(): void {
    this.taskService.delete(this.currentTask.id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/tasks']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  executeTask(): void {
    this.taskService.execute(this.currentTask.id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/tasks']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
