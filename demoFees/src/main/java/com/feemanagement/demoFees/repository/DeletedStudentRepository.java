package com.feemanagement.demoFees.repository;

import com.feemanagement.demoFees.entity.DeletedStudents;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeletedStudentRepository extends JpaRepository<DeletedStudents, String> {
}
