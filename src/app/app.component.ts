import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
})
export class AppComponent {
  tasks: string[] = [];
  newTask: string = '';

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement | null;
    this.newTask = inputElement?.value || '';
  }

  addTask() {
    if (this.newTask) {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
