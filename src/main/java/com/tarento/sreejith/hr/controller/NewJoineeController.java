package com.tarento.sreejith.hr.controller;

import com.tarento.sreejith.hr.modal.NewJoinee;
import com.tarento.sreejith.hr.service.NewJoineeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/newjoinee")
public class NewJoineeController {

    @Autowired
    NewJoineeService newJoineeService;

    @GetMapping("/")
    public List<NewJoinee> getAllNewJoinee() {
        return newJoineeService.readAllNewJoinee();
    }

    @GetMapping("/{id}")
    public Optional<NewJoinee> getOneNewJoinee(@PathVariable int id) {
        return newJoineeService.readOneNewJoinee(id);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/post")
    public void postNewJoinee(@RequestBody NewJoinee newJoinee) {
        System.out.println(newJoinee.getEmpName());
        System.out.println(newJoinee.getEmpId());
        System.out.println(newJoinee.getRole().getRoleId());
        newJoineeService.writeNewJoinee(newJoinee);
    }
}
