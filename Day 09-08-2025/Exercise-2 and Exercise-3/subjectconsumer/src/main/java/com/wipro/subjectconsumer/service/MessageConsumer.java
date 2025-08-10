package com.wipro.subjectconsumer.service;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import com.wipro.subjectconsumer.entity.Subject;

@Service
public class MessageConsumer {

    @KafkaListener(topics = "learn-subject", groupId = "subject-group")
    public void consume(Subject subject) {
        System.out.println("Received message: " + subject);
    }
}