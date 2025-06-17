package com.feemanagement.demoFees.repository;

import com.feemanagement.demoFees.entity.Fees;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeesRepository extends JpaRepository<Fees,Long> {
}
