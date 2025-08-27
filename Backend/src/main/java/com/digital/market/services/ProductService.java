package com.digital.market.services;



import java.util.List;
import java.util.UUID;

import com.digital.market.dto.ProductDto;
import com.digital.market.entities.Product;


public interface ProductService {

    public Product addProduct(ProductDto product);
    public List<ProductDto> getAllProducts(UUID categoryId, UUID typeId);

    ProductDto getProductBySlug(String slug);

    ProductDto getProductById(UUID id);

    Product updateProduct(ProductDto productDto);
}
