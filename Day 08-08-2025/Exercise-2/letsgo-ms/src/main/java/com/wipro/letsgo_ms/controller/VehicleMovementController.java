package com.wipro.letsgo_ms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.letsgo_ms.dto.MoveRequest;
import com.wipro.letsgo_ms.entity.VehicleMovement;
import com.wipro.letsgo_ms.service.VehicleMovementService;

@RestController
@RequestMapping("/move")
public class VehicleMovementController {

    private final VehicleMovementService service;
    @Autowired
    public VehicleMovementController(VehicleMovementService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<VehicleMovement> move(@RequestBody MoveRequest req) {
        VehicleMovement vm = new VehicleMovement();
        vm.setVehId(req.getVehId());
        vm.setLat(req.getLat());
        vm.setLongitude(req.getLon());
        VehicleMovement saved = service.save(vm);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<VehicleMovement>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }
}
