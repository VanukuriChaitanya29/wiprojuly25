import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FlightService } from '../../services/flight.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private flightService: FlightService) {
    this.searchForm = this.fb.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      travelDate: ['', Validators.required]
    });
  }
  swapSourceDestination() {
  const sourceValue = this.searchForm.get('source')?.value;
  const destinationValue = this.searchForm.get('destination')?.value;

  this.searchForm.patchValue({
    source: destinationValue,
    destination: sourceValue
  });
}


  onSearch() {
    if (this.searchForm.valid) {
      const criteria = this.searchForm.value;
      this.flightService.setSearchCriteria(criteria);
      this.router.navigate(['/search-results']);
    }
  }
}