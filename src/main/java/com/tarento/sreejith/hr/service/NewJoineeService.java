package com.tarento.sreejith.hr.service;

import com.tarento.sreejith.hr.model.NewJoinee;
import com.tarento.sreejith.hr.repository.NewJoineeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewJoineeService {

    @Autowired
    NewJoineeRepository newJoineeRepository;

    public List<NewJoinee> readAllNewJoinee() {
        return newJoineeRepository.findAll();
    }

}
