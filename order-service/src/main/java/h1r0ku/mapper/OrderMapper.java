package h1r0ku.mapper;

import feign.FeignException;
import h1r0ku.dto.request.OrderRequest;
import h1r0ku.dto.response.CustomerResponse;
import h1r0ku.dto.response.OrderItemResponse;
import h1r0ku.dto.response.OrderResponse;
import h1r0ku.entity.Order;
import h1r0ku.exceptions.NotFoundException;
import h1r0ku.feign.CustomerClient;
import h1r0ku.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class OrderMapper {

    private final BasicMapper basicMapper;
    private final OrderService orderService;
    private final CustomerClient customerClient;

    public OrderResponse create(OrderRequest orderRequest) {
        Order order = basicMapper.convertTo(orderRequest, Order.class);
        try {
            CustomerResponse customerResponse = customerClient.getById(order.getCustomerId()).getBody();
            order.setCustomerId(customerResponse.getId());
        } catch (FeignException.NotFound e) {
            throw new NotFoundException(e.getMessage());
        }
        return basicMapper.convertTo(orderService.create(order), OrderResponse.class);
    }
    public Page<OrderResponse> getAll(Pageable pageable) {
        return orderService.getAll(pageable).map(order -> basicMapper.convertTo(order, OrderResponse.class));
    }
    public OrderResponse getOrderById(Long id) {
        return basicMapper.convertTo(orderService.getOrderById(id), OrderResponse.class);
    }
    public Page<OrderItemResponse> getOrderItemsByOrder(Long orderId, Pageable pageable) {
        return orderService.getOrderItemsByOrder(orderId, pageable)
                .map(orderItem -> basicMapper.convertTo(orderItem, OrderItemResponse.class));
    }
    public Page<OrderResponse> getOrdersByUser(Long userId, Pageable pageable) {
        orderService.getOrdersByUser(userId, pageable).map(order -> basicMapper.convertTo(order, OrderResponse.class));
        return null;
    }
    public OrderResponse updateOrder(Long id, OrderRequest updatedOrder) {
        Order order = basicMapper.convertTo(updatedOrder, Order.class);
        return basicMapper.convertTo(orderService.updateOrder(id, order), OrderResponse.class);
    }
    public void deleteOrder(Long id) {
        orderService.deleteOrder(id);
    }
}
