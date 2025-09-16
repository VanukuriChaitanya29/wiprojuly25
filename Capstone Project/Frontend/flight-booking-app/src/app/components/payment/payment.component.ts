import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf, CurrencyPipe, DatePipe } from '@angular/common';
import { PaymentService } from '../../services/payment.service';
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../models/flight.model';

@Component({
  selector: 'app-payment',
  standalone: true,
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  imports: [ReactiveFormsModule, NgIf, CurrencyPipe, DatePipe]
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;
  selectedFlight: Flight | null = null;  // ✨ to hold flight details

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private paymentService: PaymentService,
    private flightService: FlightService   // ✨ inject flight service
  ) {
    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      nameOnCard: ['', Validators.required],
      expiryMonth: ['', [Validators.required, Validators.min(1), Validators.max(12)]],
      expiryYear: ['', [Validators.required, Validators.min(new Date().getFullYear())]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]]
    });
  }

  ngOnInit(): void {
    this.selectedFlight = this.flightService.getSelectedFlight();  // ✨ load flight details
  }

  onSubmit() {
    if (this.paymentForm.invalid) return;

    this.paymentService.processPayment(this.paymentForm.value).subscribe(success => {
      this.router.navigate([success ? '/payment-success' : '/payment-failure']);
    });
  }
}
