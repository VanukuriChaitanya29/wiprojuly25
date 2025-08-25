import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, VehicleComponent],
  template: `<app-vehicle-comp></app-vehicle-comp>`
})
export class AppComponent {}