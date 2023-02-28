package h1r0ku.dto.request;

import jakarta.validation.constraints.*;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Data
public class ProductRequest {
    @Size(min = 3, max = 40, message = "Product name must be between 3 and 40 characters")
    @NotBlank(message = "Product name value mustn't be null or whitespace")
    private String productName;
    @Size(min = 20, max = 500, message = "Description must be between 20 and 500 characters")
    @NotBlank(message = "Description value mustn't be null or whitespace")
    private String description;
    @Positive
    @Max(value = 10_000_000)
    private BigDecimal price;
    @Positive
    @Max(value = 10_000_000)
    private Integer quantity;
    private Long categoryId;
    private List<MultipartFile> images = new ArrayList<>();
}
