package com.feemanagement.demoFees.repository;

import com.feemanagement.demoFees.entity.UserLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserLoginRepository extends JpaRepository<UserLogin,Long> {
    Optional<UserLogin> findByUserNameAndPassword(String userName,String password);
}
