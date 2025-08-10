package com.wipro.letsgo_ms.service;

import java.util.List;

import com.wipro.letsgo_ms.entity.VehicleMovement;

public interface VehicleMovementService {
    VehicleMovement save(VehicleMovement vm);
    List<VehicleMovement> findAll();
}