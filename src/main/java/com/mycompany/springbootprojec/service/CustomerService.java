package com.mycompany.springbootprojec.service;
import com.mycompany.springbootprojec.model.Customer;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public interface CustomerService {
    public List<Customer> getAll();
    public void addCustomer(Customer customer);
}