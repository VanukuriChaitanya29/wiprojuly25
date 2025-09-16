import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, DatePipe, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../models/flight.model';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-payment-success',
  standalone: true,
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css'],
  imports: [NgIf, DatePipe, CurrencyPipe, RouterLink]
})
export class PaymentSuccessComponent implements OnInit {
  bookedFlight: Flight | null = null;

  constructor(private flightService: FlightService, private router: Router) {}

  ngOnInit(): void {
    this.bookedFlight = this.flightService.getSelectedFlight();
    if (!this.bookedFlight) this.router.navigate(['/']);
  }

  downloadTicket() {
    if (!this.bookedFlight) return;

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('E-Ticket', 10, 10);

    doc.setFontSize(12);
    doc.text(`Flight: ${this.bookedFlight.flightNumber}`, 10, 30);
    doc.text(`Aircraft: ${this.bookedFlight.aircraftName}`, 10, 40);
    doc.text(`Route: ${this.bookedFlight.source} → ${this.bookedFlight.destination}`, 10, 50);
    doc.text(`Date: ${this.bookedFlight.travelDate}`, 10, 60);
    const formattedPrice = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' })
  .format(this.bookedFlight.price);

doc.text(`Price: ${formattedPrice}`, 10, 70);


    // Save as PDF
    doc.save('ticket.pdf');
  }
}
