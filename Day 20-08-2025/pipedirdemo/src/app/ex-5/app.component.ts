import { Component } from '@angular/core';
import { MovieComponent } from './movie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieComponent],
  template: `
    <h1>Welcome to Movie App</h1>
    <app-movie></app-movie>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
