package com.wipro.subjectproducer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.wipro.subjectproducer.entity.Subject;

@Service
public class MessageProducer {

    private static final String TOPIC = "learn-subject";

    @Autowired
    private KafkaTemplate<String, Subject> kafkaTemplate;

    public String sendMessage(Subject message) {
        kafkaTemplate.send(TOPIC, message);
        return "Message sent successfully: " + message.toString();
    }
}