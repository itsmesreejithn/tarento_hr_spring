package com.tarento.sreejith.hr.service;

import com.tarento.sreejith.hr.ImageUtils;
import com.tarento.sreejith.hr.modal.NewJoineeImage;
import com.tarento.sreejith.hr.repository.NewJoineeImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;
import java.util.zip.DataFormatException;


@Service
public class NewJoineeImageService {
    @Autowired
    NewJoineeImageRepository newJoineeImageRepository;

    public String uploadNewJoineeImage(Long id, MultipartFile file) throws IOException {
        newJoineeImageRepository.save(NewJoineeImage.builder()
                .empImageId(id)
                .empImage(ImageUtils.compressImage(file.getBytes()))
                .build());
        return "File uplaoded successfully";
    }

    public ResponseEntity<?> downloadNewJoineeImage(Long id) {
        Optional<NewJoineeImage> optionalNewJoineeImage = newJoineeImageRepository.findById(id);
        return optionalNewJoineeImage.map(image -> {
            try {
                byte[] imageData = ImageUtils.decompressImage(image.getEmpImage());
                return ResponseEntity.ok().body(imageData);
            } catch (IOException exception) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to download image");
            }
        }).orElse(ResponseEntity.notFound().build());
    }
}
