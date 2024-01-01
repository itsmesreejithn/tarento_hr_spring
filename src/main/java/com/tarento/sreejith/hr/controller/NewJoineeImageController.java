package com.tarento.sreejith.hr.controller;

import com.tarento.sreejith.hr.service.NewJoineeImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.zip.DataFormatException;

@RestController
@RequestMapping("/newjoinee/images")
public class NewJoineeImageController {
    @Autowired
    NewJoineeImageService newJoineeImageService;

    @PostMapping("/upload/{id}")
    public ResponseEntity<String> uploadNewJoineeImage(@PathVariable Long id, @RequestParam("file")MultipartFile file) throws IOException {
        String response = newJoineeImageService.uploadNewJoineeImage(id, file);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<?> downloadNewJoineeImage(@PathVariable Long id) throws DataFormatException, IOException {
        return newJoineeImageService.downloadNewJoineeImage(id);
    }
}
