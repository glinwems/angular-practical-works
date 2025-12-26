import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Question {
  text: string;
  options: string[];
  correctAnswer: number;
}

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.html',
  styleUrl: './question.css'
})
export class QuestionComponent {
  @Input() question!: Question;
  @Output() answerSelected = new EventEmitter<number>();
  
  selectedAnswer: number | null = null;
  showCorrect = false;

  selectAnswer(index: number): void {
    this.selectedAnswer = index;
    this.answerSelected.emit(index);
  }

  showAnswer(): void {
    this.showCorrect = true;
  }
}

