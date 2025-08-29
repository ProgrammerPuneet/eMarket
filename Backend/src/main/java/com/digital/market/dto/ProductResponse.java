package com.digital.market.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class ProductResponse {

	private List<ProductDto> products;
	private long totalElements;
	private int totalPages;
	private Boolean isFirst;
	private Boolean isLast;
	private int pageNo;
	private int pageSize;

}
