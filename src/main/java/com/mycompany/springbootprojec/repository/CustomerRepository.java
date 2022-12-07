package com.mycompany.springbootprojec.repository;

import com.mycompany.springbootprojec.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository //stereotype
public interface CustomerRepository extends JpaRepository<Customer,Integer> {
//repository will create an object of an interface
    //internally, it will create a child class of this interface
    //and the object will be of that child class

}
