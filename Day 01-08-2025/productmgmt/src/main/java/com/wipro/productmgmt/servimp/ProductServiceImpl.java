package com.wipro.productmgmt.servimp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.wipro.productmgmt.entity.Product;
import com.wipro.productmgmt.repo.ProductRepository;
import com.wipro.productmgmt.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository repo;

    @Override
    public Product saveProduct(Product product) {
        return repo.save(product);
    }

    @Override
    public List<Product> getAllProducts() {
        return repo.findAll();
    }

    @Override
    public Product getProductById(int id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public Product updateProduct(Product product) {
        return repo.save(product);
    }

    @Override
    public void deleteProduct(int id) {
        repo.deleteById(id);
    }

    @Override
    public List<Product> getByProductMake(String make) {
        return repo.findByProductMake(make);
    }

    @Override
    public List<Product> getByNameAndMakeSorted(String name, String make) {
        return repo.findByProductNameAndProductMakeOrderByProductNameDesc(name, make);
    }

    @Override
    public Page<Product> getPaginatedSortedProducts(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("productPrice"));
        return repo.findAll(pageable);
    }
}