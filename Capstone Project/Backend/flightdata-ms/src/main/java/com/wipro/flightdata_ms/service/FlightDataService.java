package com.wipro.flightdata_ms.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.wipro.flightdata_ms.model.FlightData;
import com.wipro.flightdata_ms.repository.FlightDataRepository;

@Service
public class FlightDataService {

    private final FlightDataRepository flightRepository;

    public FlightDataService(FlightDataRepository flightRepository) {
        this.flightRepository = flightRepository;
    }

    public List<FlightData> getAllFlights() {
        return flightRepository.findAll();
    }

    public FlightData getFlightById(Long id) {
        return flightRepository.findById(id).orElse(null);
    }

    public List<FlightData> searchFlights(String source, String destination) {
        return flightRepository.findBySourceAndDestination(source, destination);
    }

    public FlightData addFlight(FlightData flight) {
        return flightRepository.save(flight);
    }
}
