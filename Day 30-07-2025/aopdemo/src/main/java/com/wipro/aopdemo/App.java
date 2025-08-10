package com.wipro.aopdemo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import config.AppConfig;
import service.AirTravelService;

public class App 
{
    public static void main( String[] args )
    {
    	ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        AirTravelService ats = context.getBean(AirTravelService.class);

        try {
            ats.checkIn(true);
            ats.collectBoardingPass();
            ats.doSecurityCheck();
           ats.doBoarding();
         
        } catch (Exception e) {
            System.out.println( e.getMessage());
        }
    }
}
