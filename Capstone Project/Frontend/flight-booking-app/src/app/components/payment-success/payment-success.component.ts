import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, DatePipe, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../models/flight.model';

@Component({
  selector: 'app-payment-success',
  standalone: true,
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css'],
  imports: [NgIf, DatePipe, CurrencyPipe, RouterLink]
})
export class PaymentSuccessComponent implements OnInit {
  // 👇 allow null initially
  bookedFlight: Flight | null = null;

  constructor(private flightService: FlightService, private router: Router) {}

  ngOnInit(): void {
    this.bookedFlight = this.flightService.getSelectedFlight();
    if (!this.bookedFlight) this.router.navigate(['/']);
  }

  downloadTicket() {
    const blob = new Blob(
      [
        `E-Ticket\nFlight: ${this.bookedFlight?.flightNumber}\nRoute: ${this.bookedFlight?.source} -> ${this.bookedFlight?.destination}\nDate: ${this.bookedFlight?.travelDate}\nPrice: ${this.bookedFlight?.price}`
      ],
      { type: 'text/plain' }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ticket.txt';
    a.click();
    URL.revokeObjectURL(url);
  }
}
