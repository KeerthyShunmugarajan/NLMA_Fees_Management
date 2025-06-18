package com.feemanagement.demoFees.Mapper;

import com.feemanagement.demoFees.DTO.FeesDTO;
import com.feemanagement.demoFees.entity.Fees;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
public class FeeMapper {

    // DTO → Entity
    public static Fees toFeesEntity(FeesDTO dto) {
        Fees newFees = new Fees();
        //newFees.setBillNumber(dto.getBillNumber());
        newFees.setAcademicYear(dto.getAcademicYear());
        newFees.setDateOfBillng(dto.getDateOfBillng());
        newFees.setCurrentClass(dto.getCurrentClass());
        newFees.setStudentId(dto.getStudentId());
        newFees.setStudentName(dto.getStudentName());
        newFees.setPaymentFrequency(dto.getPaymentFrequency());
        newFees.setFeeRecieved(dto.getFeeRecieved());
        newFees.setAnnualFee(dto.getAnnualFee());
        newFees.setPaymentMode(dto.getPaymentMode());
        newFees.setFeeReduction(dto.getFeeReduction());
        newFees.setAmountReduced(dto.getAmountReduced());
        newFees.setAdminRemarks(dto.getAdminRemarks());

        return newFees;
    }

    // Entity → DTO
    public static FeesDTO toFeesDTO(Fees entity) {
        FeesDTO feesDTO = new FeesDTO();
        feesDTO.setAcademicYear(entity.getAcademicYear());
        feesDTO.setDateOfBillng(entity.getDateOfBillng());
        feesDTO.setCurrentClass(entity.getCurrentClass());
        feesDTO.setStudentId(entity.getStudentId());
        feesDTO.setStudentName(entity.getStudentName());
        feesDTO.setPaymentFrequency(entity.getPaymentFrequency());
        feesDTO.setFeeRecieved(entity.getFeeRecieved());
        feesDTO.setAnnualFee(entity.getAnnualFee());
        feesDTO.setPaymentMode(entity.getPaymentMode());
        feesDTO.setFeeReduction(entity.getFeeReduction());
        feesDTO.setAmountReduced(entity.getAmountReduced());
        feesDTO.setAdminRemarks(entity.getAdminRemarks());


        return feesDTO;
    }
}
