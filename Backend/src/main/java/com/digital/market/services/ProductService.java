package com.digital.market.services;

import java.util.List;

import com.digital.market.dto.ProductDto;
import com.digital.market.dto.ProductResponse;



public interface ProductService {

	public Boolean saveProduct(ProductDto productDto);

	public List<ProductDto> getAllProducts();

	public ProductDto getProductById(Integer id);

	public Boolean deleteProduct(Integer id);

	public ProductResponse getProductsWithPagination(int pageNo, int pageSize, String sortBy, String sortDir);

}
