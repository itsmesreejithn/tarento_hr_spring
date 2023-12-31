package com.tarento.sreejith.hr.controller;

import com.tarento.sreejith.hr.modal.Ibu;
import com.tarento.sreejith.hr.service.IbuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/ibus")
@CrossOrigin(origins = "*")
public class IbuController {

    @Autowired
    IbuService ibuService;

    @GetMapping("/")
    public List<Ibu> getIbus() {
        return ibuService.readAllIbu();
    }
}
