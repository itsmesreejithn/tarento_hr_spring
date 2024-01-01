package com.tarento.sreejith.hr.modal;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.awt.*;
import java.math.BigInteger;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
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

    @OneToOne
    @JoinColumn(name = "image_id")
    private NewJoineeImage newJoineeImage;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;

    @ManyToOne
    @JoinColumn(name = "ibu_id")
    private Ibu ibu;



}
