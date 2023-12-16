package com.tarento.sreejith.hr.model;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class NewJoinee {
    private int empId;
    private String empName;
    private String empAddress;

    public NewJoinee() {

    }

    public NewJoinee(int empId, String empName, String empAddress) {
        this.empId = empId;
        this.empName = empName;
        this.empAddress = empAddress;
    }
}
