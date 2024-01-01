package com.tarento.sreejith.hr.modal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class NewJoineeImage {
    @Id
    private Long empImageId;
    @Lob
    @Column(name = "emp_image", length = 1000)
    private byte[] empImage;
}
