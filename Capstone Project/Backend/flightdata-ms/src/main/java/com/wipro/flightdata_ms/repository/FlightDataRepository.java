package com.wipro.flightdata_ms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wipro.flightdata_ms.model.FlightData;

public interface FlightDataRepository extends JpaRepository<FlightData, Long> {
    List<FlightData> findBySourceAndDestination(String source, String destination);
}
