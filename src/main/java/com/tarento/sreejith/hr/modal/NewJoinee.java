package com.tarento.sreejith.hr.modal;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;

@Entity
@Setter
@Getter
public class NewJoinee {
   @Id
   private int empId;
    private String empName;
    private String empHome;
    private BigInteger empPhone;
    private String empEmail;
    private String empHobbies;
    private String empQuote;
    private String empWwib;
    private int empExperience;
    private String empCoreSkills;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;

    @ManyToOne
    @JoinColumn(name = "ibu_id")
    private Ibu ibu;

 public NewJoinee() {

    }

 public NewJoinee(int empId, String empName, String empHome, BigInteger empPhone, String empEmail, String empHobbies, String empQuote, String empWwib, int empExperience, String empCoreSkills, Role role, Ibu ibu) {
  this.empId = empId;
  this.empName = empName;
  this.empHome = empHome;
  this.empPhone = empPhone;
  this.empEmail = empEmail;
  this.empHobbies = empHobbies;
  this.empQuote = empQuote;
  this.empWwib = empWwib;
  this.empExperience = empExperience;
  this.empCoreSkills = empCoreSkills;
  this.role = role;
  this.ibu = ibu;
 }
}
