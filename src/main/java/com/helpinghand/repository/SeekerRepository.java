package com.helpinghand.repository;

import com.helpinghand.entity.SeekerDetail;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeekerRepository extends CrudRepository<SeekerDetail, Integer> {
}
