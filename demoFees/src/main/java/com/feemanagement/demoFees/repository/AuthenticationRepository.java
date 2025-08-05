package com.feemanagement.demoFees.repository;

import com.feemanagement.demoFees.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AuthenticationRepository extends JpaRepository<User,Long> {
    Optional<User> findByUserNameAndPassword(String userName,String password);
}
