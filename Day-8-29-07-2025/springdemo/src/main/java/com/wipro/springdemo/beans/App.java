package com.wipro.springdemo.beans;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class App {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

        Mobile mobile = context.getBean(Mobile.class);
        System.out.println(mobile);
    }
}