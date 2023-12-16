package com.tarento.sreejith.hr.service;


import com.tarento.sreejith.hr.model.Role;
import com.tarento.sreejith.hr.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {
    @Autowired
    RoleRepository roleRepository;

    public List<Role> readeRoles() {
        return roleRepository.findAll();
    }
}
