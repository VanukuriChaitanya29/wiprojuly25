package com.wipro.productmgmt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.productmgmt.entity.Product;
import com.wipro.productmgmt.service.ProductService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
@Tag(name = "Product", description = "Product management APIs")
@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService service;
    
    @PostMapping
    public Product saveProduct(@RequestBody Product product) {
        return service.saveProduct(product);
    }
    @Operation(summary = "Save a product place")
	  @ApiResponses(value = {
	    @ApiResponse(responseCode = "200", description = "Saved successfully"),
	    @ApiResponse(responseCode = "404", description = "Not found")
	  })



    @GetMapping
    public List<Product> getAllProducts() {
        return service.getAllProducts();
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable int id) {
        return service.getProductById(id);
    }

    @PutMapping
    public Product updateProduct(@RequestBody Product product) {
        return service.updateProduct(product);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable int id) {
        service.deleteProduct(id);
    }

    @GetMapping("/make/{make}")
    public List<Product> getByProductMake(@PathVariable String make) {
        return service.getByProductMake(make);
    }

    @GetMapping("/search")
    public List<Product> getByNameAndMakeSorted(
            @RequestParam String name,
            @RequestParam String make) {
        return service.getByNameAndMakeSorted(name, make);
    }

    @GetMapping("/page")
    public Page<Product> getPaginatedSorted(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size) {
        return service.getPaginatedSortedProducts(page, size);
    }
}