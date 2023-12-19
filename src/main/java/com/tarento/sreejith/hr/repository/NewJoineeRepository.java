package com.tarento.sreejith.hr.repository;

import com.tarento.sreejith.hr.modal.NewJoinee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewJoineeRepository extends JpaRepository<NewJoinee, Integer> {
}
