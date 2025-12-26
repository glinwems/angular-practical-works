import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { noTestValidator } from './no-test.validator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, noTestValidator()]],
      skills: this.fb.array([
        this.fb.control('', Validators.required)
      ])
    });
  }

  get skills(): FormArray {
    return this.userForm.get('skills') as FormArray;
  }

  addSkill(): void {
    this.skills.push(this.fb.control('', Validators.required));
  }

  removeSkill(index: number): void {
    if (this.skills.length > 1) {
      this.skills.removeAt(index);
    }
  }

  getSkillControl(index: number) {
    return this.skills.at(index);
  }

  getNameError(): string | null {
    const nameControl = this.userForm.get('name');
    if (nameControl && nameControl.touched && nameControl.errors) {
      if (nameControl.errors['required']) {
        return 'Ім\'я обов\'язкове для заповнення';
      }
      if (nameControl.errors['noTest']) {
        return nameControl.errors['noTest'].message;
      }
    }
    return null;
  }

  getSkillError(index: number): string | null {
    const skillControl = this.getSkillControl(index);
    if (skillControl && skillControl.touched && skillControl.errors?.['required']) {
      return 'Навичка не може бути порожньою';
    }
    return null;
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Форма відправлена!');
      console.log('Значення форми:', this.userForm.value);
      console.log('JSON:', JSON.stringify(this.userForm.value, null, 2));
    } else {
      console.log('Форма невалідна!');
      console.log('Помилки:', this.getFormErrors());
      this.userForm.markAllAsTouched();
    }
  }

  resetForm(): void {
    this.skills.clear();
    this.addSkill();
    this.userForm.reset();
  }

  private getFormErrors(): any {
    const errors: any = {};
    Object.keys(this.userForm.controls).forEach(key => {
      const control = this.userForm.get(key);
      if (control && control.errors) {
        errors[key] = control.errors;
      }
    });
    return errors;
  }
}
