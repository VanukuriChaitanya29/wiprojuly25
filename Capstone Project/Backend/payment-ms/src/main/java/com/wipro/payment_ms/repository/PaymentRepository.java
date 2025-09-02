package com.wipro.payment_ms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wipro.payment_ms.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    List<Payment> findByBookingId(Long bookingId);


}
