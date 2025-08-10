package com.wipro.letsgo_ms.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.wipro.letsgo_ms.entity.VehicleMovement;
import com.wipro.letsgo_ms.repo.VehicleMovementRepository;
import com.wipro.letsgo_ms.service.VehicleMovementService;

@Service
public class VehicleMovementServiceImpl implements VehicleMovementService {

    private final VehicleMovementRepository repository;

    public VehicleMovementServiceImpl(VehicleMovementRepository repository) {
        this.repository = repository;
    }

    @Override
    public VehicleMovement save(VehicleMovement vm) {
        return repository.save(vm);
    }

    @Override
    public List<VehicleMovement> findAll() {
        return repository.findAll();
    }
}