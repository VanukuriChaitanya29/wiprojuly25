import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor, DatePipe, CurrencyPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../models/flight.model';

@Component({
  selector: 'app-search-results',
  standalone: true,
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  imports: [FormsModule, NgIf, NgFor, DatePipe, CurrencyPipe, RouterLink] // 👈 added RouterLink
})
export class SearchResultsComponent implements OnInit {
  flights: Flight[] = [];
  filteredFlights: Flight[] = [];
  noResults = false;
  filters = { priceMin: 0, priceMax: 100000 };

  constructor(private flightService: FlightService, private router: Router) {}

  ngOnInit(): void {
    this.flightService.searchFlights().subscribe(list => {
      this.flights = list;
      this.filteredFlights = [...list];
      this.noResults = list.length === 0;
    });
  }

  applyFilters() {
    this.filteredFlights = this.flights.filter(f =>
      f.price >= this.filters.priceMin && f.price <= this.filters.priceMax
    );
    this.noResults = this.filteredFlights.length === 0;
  }

  clearFilters() {
    this.filters = { priceMin: 0, priceMax: 100000 };
    this.applyFilters();
  }

  bookFlight(flight: Flight) {
    this.flightService.setSelectedFlight(flight);
    this.router.navigate(['/booking']);
  }
}
