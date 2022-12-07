package com.mycompany.springbootprojec.controller;
import com.mycompany.springbootprojec.model.Customer;
import com.mycompany.springbootprojec.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("customers")
public class CustomerController {
    @Autowired
    private CustomerService customerService;
    @GetMapping
    public List<Customer> getCustomers(){
        return customerService.getAll();
    }
    @PostMapping
    public void createCustomer(@RequestBody Customer customer){
        System.out.println(System.currentTimeMillis());
        System.out.println("inside createCustomer method!!");
        customerService.addCustomer(customer);
        System.out.println(System.currentTimeMillis());
    }
}