package com.tarento.sreejith.hr.controller;

import com.tarento.sreejith.hr.model.NewJoinee;
import com.tarento.sreejith.hr.service.NewJoineeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/newjoinee")
public class NewJoineeController {

    @Autowired
    NewJoineeService newJoineeService;

    @GetMapping("/")
    public List<NewJoinee> getAllNewJoinee() {
        return newJoineeService.readAllNewJoinee();
    }
}
