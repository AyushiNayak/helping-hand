package com.helpinghand.repository;

import com.helpinghand.entity.VolunteerMapping;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RequestRepository extends CrudRepository<VolunteerMapping,Integer> {
}
