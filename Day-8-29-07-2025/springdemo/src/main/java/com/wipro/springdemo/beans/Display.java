package com.wipro.springdemo.beans;

import org.springframework.stereotype.Component;

@Component
public class Display {
    private int size;

    public Display() {
        // Default constructor
        this.size = 6;  // default size, you can change it or add setter if you want
    }

    public Display(int size) {
        this.size = size;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    @Override
    public String toString() {
        return "Display [size=" + size + "]";
    }
}