package com.tarento.sreejith.hr.service;

import com.tarento.sreejith.hr.modal.Ibu;
import com.tarento.sreejith.hr.repository.IbuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IbuService {

    @Autowired
    IbuRepository ibuRepository;

    public List<Ibu> readAllIbu() {
        return ibuRepository.findAll();
    }
}
