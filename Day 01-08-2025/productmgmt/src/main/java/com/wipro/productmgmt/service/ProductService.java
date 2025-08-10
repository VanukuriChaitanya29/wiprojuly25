package com.wipro.productmgmt.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.wipro.productmgmt.entity.Product;

public interface ProductService {

    Product saveProduct(Product product);

    List<Product> getAllProducts();

    Product getProductById(int id);

    Product updateProduct(Product product);

    void deleteProduct(int id);

    List<Product> getByProductMake(String make);

    List<Product> getByNameAndMakeSorted(String name, String make);

    Page<Product> getPaginatedSortedProducts(int page, int size);
}