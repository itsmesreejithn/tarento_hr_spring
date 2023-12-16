package com.tarento.sreejith.hr.controller;

import com.tarento.sreejith.hr.model.Role;
import com.tarento.sreejith.hr.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/roles")
public class RoleController {

    @Autowired
    RoleService roleService;

    @GetMapping("/")
    public List<Role> getRoles() {
        return roleService.readeRoles();
    }
}
