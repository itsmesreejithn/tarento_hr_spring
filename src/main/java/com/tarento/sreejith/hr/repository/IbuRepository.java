package com.tarento.sreejith.hr.repository;

import com.tarento.sreejith.hr.modal.Ibu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IbuRepository extends JpaRepository<Ibu, Integer> {

}
