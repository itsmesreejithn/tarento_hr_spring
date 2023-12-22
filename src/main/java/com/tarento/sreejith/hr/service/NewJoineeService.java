package com.tarento.sreejith.hr.service;

import com.tarento.sreejith.hr.modal.Ibu;
import com.tarento.sreejith.hr.modal.NewJoinee;
import com.tarento.sreejith.hr.modal.Role;
import com.tarento.sreejith.hr.repository.IbuRepository;
import com.tarento.sreejith.hr.repository.NewJoineeRepository;
import com.tarento.sreejith.hr.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NewJoineeService {

    @Autowired
    NewJoineeRepository newJoineeRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    IbuRepository ibuRepository;

    public List<NewJoinee> readAllNewJoinee() {
        return newJoineeRepository.findAll();
    }

    public Optional<NewJoinee> readOneNewJoinee(int id) {
        return newJoineeRepository.findById(id);
    }

    public void writeNewJoinee(NewJoinee newJoinee) {
        newJoineeRepository.save(newJoinee);
    }

}
