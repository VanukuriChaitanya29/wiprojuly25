import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyPipe, DatePipe, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';   // ✅ FIX: Import FormsModule
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../models/flight.model';

@Component({
  selector: 'app-booking',
  standalone: true,
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  imports: [NgIf, DatePipe, CurrencyPipe, FormsModule]   // ✅ Now it will work
})
export class BookingComponent implements OnInit {
  selectedFlight: Flight | null = null;

  passenger = {
    name: '',
    age: null as number | null,
    phone: '',
    email: '',
    gender: ''
  };

  constructor(private flightService: FlightService, private router: Router) {}

  ngOnInit(): void {
    this.selectedFlight = this.flightService.getSelectedFlight();
    if (!this.selectedFlight) {
      setTimeout(() => this.router.navigate(['/']), 2000);
    }
  }

  proceedToPayment(): void {
    if (this.selectedFlight) {
      console.log('Passenger Details:', this.passenger);
      this.router.navigate(['/payment']);
    }
  }
}
