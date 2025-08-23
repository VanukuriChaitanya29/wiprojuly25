import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CentToFPipe } from './cent-to-f.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, CentToFPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  centigrade: number = 0;
}
