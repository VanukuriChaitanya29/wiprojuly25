package com.wipro.payment_ms.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.wipro.payment_ms.model.Payment;
import com.wipro.payment_ms.repository.PaymentRepository;

@Service
public class PaymentService {

    private final PaymentRepository paymentRepository;

    public PaymentService(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    public Payment getPaymentById(Long id) {
        return paymentRepository.findById(id).orElse(null);
    }

    public List<Payment> getPaymentsByBookingId(Long bookingId) {
        return paymentRepository.findByBookingId(bookingId);
    }

    public Payment makePayment(Payment payment) {
        payment.setStatus("SUCCESS"); // Simplified for demo
        return paymentRepository.save(payment);
    }
}
