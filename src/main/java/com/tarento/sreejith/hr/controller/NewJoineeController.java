package com.tarento.sreejith.hr.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NewJoineeController {
    @GetMapping("/")
    public String testGetEndPoint() {
        return "End point active";
    }
}
