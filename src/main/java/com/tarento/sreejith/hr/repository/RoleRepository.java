package com.tarento.sreejith.hr.repository;

import com.tarento.sreejith.hr.modal.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
}
