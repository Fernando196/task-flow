import { Component, inject, OnInit } from '@angular/core';
import { ModalRef } from '../../../shared/components/modal/modal-ref';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusTask } from '../../enums/StatusTask.enum';
import { mockPriorities } from '../../../../data/priority';
import { ITask, Priority } from '../../interfaces/ITask.interface';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm implements OnInit {
  private formBuilder = inject(FormBuilder);
  private taskService = inject(TaskService);

  task!: ITask;

  formTask: FormGroup = this.formBuilder.group({
    id: 0,
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    completed: false,
    startDate: ['', [Validators.required]],
    endDate: ['', [Validators.required]],
    createdDate: [''],
    statusId: [StatusTask.TODO],
    priority: [null],
  });

  taskPriorities: Priority[] = [];

  constructor(public modalRef: ModalRef<TaskForm>) {
    this.taskPriorities = [...mockPriorities].map((priority) => ({
      ...priority,
    }));
  }

  ngOnInit(): void {
    if (this.task) {
      this.formTask.patchValue(this.task);
    }
  }

  close() {
    this.modalRef.close('Some result data');
  }
  selectPriority(priority: Priority) {
    this.formTask.patchValue({ priority });
  }

  saveTask() {
    if (this.formTask.invalid) {
      this.formTask.markAllAsTouched();
      return;
    }
    const taskData = this.formTask.getRawValue();

    if (this.task.id) {
      this.taskService.updateTask(this.task.id, taskData);
    } else {
      this.taskService.addTask(taskData as ITask);
    }

    this.close();
  }
}
