package com.tarento.sreejith.hr.model;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;

@Entity
@Setter
@Getter
public class NewJoinee {
    private int empId;
    private String empName;
    private String empAddress;
    private BigInteger empPhone;
    private String empEmail;
    private String empHobbies;
    private String empQuote;
    private String empWwib;
    private int empRole;
    private int empExperience;
    private String empCoreSkills;
    private int empIbu;
    public NewJoinee() {

    }

    public NewJoinee(int empId, String empName, String empAddress) {
        this.empId = empId;
        this.empName = empName;
        this.empAddress = empAddress;
    }
}
