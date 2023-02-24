package h1r0ku.service.impl;

import h1r0ku.dto.request.AuthenticationRequest;
import h1r0ku.entity.Customer;
import h1r0ku.feign.AuthClient;
import h1r0ku.repository.CustomerRepository;
import h1r0ku.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;
    private final AuthClient authClient;

    @Override
    public Customer registration(Customer customer) {
        customer.setPassword(new BCryptPasswordEncoder().encode(customer.getPassword()));
        Customer c = customerRepository.save(customer);
        authClient.authenticate(new AuthenticationRequest(c.getUsername(), c.getPassword()));
        return c;
    }

    @Override
    public Page<Customer> getAll(Pageable pageable) {
        return customerRepository.findAll(pageable);
    }

    @Override
    public Customer getById(Long id) {
        return customerRepository.findById(id).orElseThrow();
    }

    @Override
    public Customer getByUsername(String username) {
        return customerRepository.findByUsername(username);
    }

    @Override
    public void deleteById(Long id) {
        customerRepository.deleteById(id);
    }
}
