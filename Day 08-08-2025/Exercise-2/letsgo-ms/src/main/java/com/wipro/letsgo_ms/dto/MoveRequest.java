package com.wipro.letsgo_ms.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MoveRequest {
    private Integer vehId;
    private Double lat;

    @JsonProperty("long")
    private Double lon;

    public MoveRequest() {}

    public Integer getVehId() { return vehId; }
    public void setVehId(Integer vehId) { this.vehId = vehId; }

    public Double getLat() { return lat; }
    public void setLat(Double lat) { this.lat = lat; }

    public Double getLon() { return lon; }
    public void setLon(Double lon) { this.lon = lon; }
}