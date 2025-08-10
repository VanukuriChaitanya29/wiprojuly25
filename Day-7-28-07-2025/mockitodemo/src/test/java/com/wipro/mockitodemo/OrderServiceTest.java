package com.wipro.mockitodemo;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class OrderServiceTest {

	@Test
    public void testPlaceOrderMocked() {
        
        OrderService mockService = Mockito.mock(OrderService.class);

       
        when(mockService.placeOrder("ORD-01")).thenReturn("successful");

        assertEquals("successful", mockService.placeOrder("ORD-01"));
 
        verify(mockService).placeOrder("ORD-01");
    }
	
		

	

}
