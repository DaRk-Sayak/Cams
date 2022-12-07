package com.mycompany.springbootprojec.service;
import com.mycompany.springbootprojec.model.Customer;
import com.mycompany.springbootprojec.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<Customer> getAll() {
        System.out.println("CustomerRepository Child Class Created By Spring Boot: " + customerRepository.getClass().getName());
        return customerRepository.findAll();
    }

    @Override
    public void addCustomer(Customer customer) {
        customerRepository.save(customer);
    }
}