import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../models/flight.model';

@Injectable({ providedIn: 'root' })
export class FlightService {
  private searchCriteria: { source: string; destination: string; travelDate: string } | null = null;
  private selectedFlight: Flight | null = null;

  // Simple in-memory flights for demo
  private flights: Flight[] = [
    { aircraftName: 'Airindia A320', flightNumber: 'AI101', source: 'Delhi', destination: 'Mumbai', travelDate: '2025-09-10', price: 5000 },
    { aircraftName: 'Boeing 737',  flightNumber: 'AI102', source: 'Delhi', destination: 'Chennai', travelDate: '2025-09-12', price: 6000 },
    { aircraftName: 'A320neo',     flightNumber: '6E220', source: 'Delhi', destination: 'Mumbai', travelDate: '2025-09-10', price: 4500 },
    { aircraftName: 'Boeing 787',  flightNumber: 'UK809', source: 'Delhi', destination: 'Bengaluru', travelDate: '2025-09-10', price: 7600 }
  ];

  setSearchCriteria(criteria: { source: string; destination: string; travelDate: string }) {
    this.searchCriteria = criteria;
  }

  getSearchCriteria() {
    return this.searchCriteria;
  }

  searchFlights(): Observable<Flight[]> {
    if (!this.searchCriteria) return of([]);
    const { source, destination, travelDate } = this.searchCriteria;
    const filtered = this.flights.filter(f =>
      f.source.toLowerCase() === source.toLowerCase() &&
      f.destination.toLowerCase() === destination.toLowerCase() &&
      f.travelDate === travelDate
    );
    return of(filtered);
  }

  setSelectedFlight(flight: Flight) { this.selectedFlight = flight; }
  getSelectedFlight(): Flight | null { return this.selectedFlight; }
}
