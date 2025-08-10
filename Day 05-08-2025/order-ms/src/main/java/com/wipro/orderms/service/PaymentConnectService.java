package com.wipro.orderms.service;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.wipro.orderms.dto.Payment;

@FeignClient(name="paymentms")
public interface PaymentConnectService {


	@PostMapping("/payment")
	ResponseEntity<Payment> savePaymentData(@RequestBody Payment payment);	
	
	@GetMapping("/payment/order/{orderId}")
    List<Payment> getPaymentsByOrderId(@PathVariable("orderId") int orderId);

}
