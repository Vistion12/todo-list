import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { AppComponent } from './app/app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-root></app-root>
  `,
  imports: [CommonModule, AppComponent], 
})
export class App {}

bootstrapApplication(AppComponent);
