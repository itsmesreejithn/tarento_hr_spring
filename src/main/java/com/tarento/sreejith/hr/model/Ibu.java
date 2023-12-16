package com.tarento.sreejith.hr.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Ibu {

    @Id
    private int ibuId;
    private String ibuName;
    private String ibuManager;

    public Ibu() {}

    public Ibu(int ibuId, String ibuName, String ibuManager) {
        this.ibuId = ibuId;
        this.ibuName = ibuName;
        this.ibuManager = ibuManager;
    }
}
