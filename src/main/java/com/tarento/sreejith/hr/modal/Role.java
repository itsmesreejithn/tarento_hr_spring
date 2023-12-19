package com.tarento.sreejith.hr.modal;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Role {

    @Id
    private int roleId;

    private String roleName;

    public Role() {}

    public Role(int roleId, String roleName) {
        this.roleId = roleId;
        this.roleName = roleName;
    }
}
