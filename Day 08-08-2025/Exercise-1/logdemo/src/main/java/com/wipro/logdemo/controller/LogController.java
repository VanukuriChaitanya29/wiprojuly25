package com.wipro.logdemo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LogController {

    private static final Logger logger = LoggerFactory.getLogger(LogController.class);

    @GetMapping("/greet")
    public String greet() {
        logger.error("--ERROR-- log message");
        logger.warn("--WARN-- log message");
        logger.info("--INFO-- log message");
        logger.debug("--DEBUG-- log message");
        logger.trace("--TRACE-- log message");

        return "Hello from Greet!";
    }
}