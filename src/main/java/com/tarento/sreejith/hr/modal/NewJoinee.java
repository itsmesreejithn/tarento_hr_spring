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
   @GeneratedValue(strategy = GenerationType.AUTO)
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

}
