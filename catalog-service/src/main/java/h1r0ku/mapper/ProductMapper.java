package h1r0ku.mapper;

import h1r0ku.dto.request.ProductRequest;
import h1r0ku.dto.response.ProductResponse;
import h1r0ku.entity.Product;
import h1r0ku.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ProductMapper {

    private final BasicMapper basicMapper;
    private final ProductService productService;

    public Page<ProductResponse> getProducts(Pageable pageable) {
        return productService.getAll(pageable).map(product -> basicMapper.convertTo(product, ProductResponse.class));
    }

    public ProductResponse getProductById(Long productId) {
        return basicMapper.convertTo(productService.getById(productId), ProductResponse.class);
    }

    public ProductResponse createProduct(ProductRequest productRequest) {
        Product product = productService.create(basicMapper.convertTo(productRequest, Product.class));
        return basicMapper.convertTo(product, ProductResponse.class);
    }
}
