import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { DataTasksService } from '../../data-tasks.service';

@Component({
  selector: 'digi-form-up-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-up-task.component.html',
  styleUrl: './form-up-task.component.css',
})
export class FormUpTaskComponent {
  productForm!: FormGroup;
  isSubmitted = false;
  constructor(
    private fb: FormBuilder,
    private dataTasksService: DataTasksService
  ) {}
  ngOnInit() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      comment: [''],
      done: [false],
    });
  }
}
