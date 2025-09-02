package com.wipro.booking_ms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wipro.booking_ms.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByPassengerEmail(String passengerEmail);
}
