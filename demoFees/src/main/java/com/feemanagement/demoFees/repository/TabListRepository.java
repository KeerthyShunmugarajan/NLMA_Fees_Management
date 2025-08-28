package com.feemanagement.demoFees.repository;

import com.feemanagement.demoFees.entity.TabList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TabListRepository extends JpaRepository<TabList,Long> {

}
