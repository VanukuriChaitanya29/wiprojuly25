import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  template: `
    <div class="container text-center mt-5">
      <div class="alert alert-success">
        <h2>🎉 Welcome to Angular with Inline Template!</h2>
        <p>This component uses <strong>template</strong> instead of templateUrl.</p>
      </div>
    </div>
  `,
  styles: [`
    h2 {
      color: darkgreen;
    }
  `]
})
export class Welcome { }
