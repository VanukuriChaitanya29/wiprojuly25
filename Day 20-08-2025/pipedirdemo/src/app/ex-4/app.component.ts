import { Component } from '@angular/core';
import { HighlightStrikethruDirective } from './highlightstrikethru.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HighlightStrikethruDirective],  // import directive here
  template: `
    <h2 appHighlightStrikethru>
      This text will be yellow and strikethrough
    </h2>
    <p>
      Normal text here...
    </p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }