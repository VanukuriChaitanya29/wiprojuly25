package com.wipro.subjectproducer.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.subjectproducer.entity.Subject;
import com.wipro.subjectproducer.service.MessageProducer;

@RestController
@RequestMapping("/publish")
public class ProducerController {

    private final MessageProducer producer;

    public ProducerController(MessageProducer producer) {
        this.producer = producer;
    }

    @PostMapping
    public String publishMessage(@RequestBody Subject message) {
        producer.sendMessage(message);
        return "Message published: " + message;
    }
}