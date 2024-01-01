package com.tarento.sreejith.hr.repository;

import com.tarento.sreejith.hr.modal.NewJoineeImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewJoineeImageRepository extends JpaRepository<NewJoineeImage, Long> {
}
