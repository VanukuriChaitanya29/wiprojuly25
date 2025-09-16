import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { BookingComponent } from './components/booking/booking.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'payment-success', component: PaymentSuccessComponent },
  { path: '**', redirectTo: '' }
];
