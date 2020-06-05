package com.helpinghand.repository;

import com.helpinghand.entity.VolunteerDetail;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VolunteerRepository extends CrudRepository<VolunteerDetail, Long> {

  VolunteerDetail findById(long id);
}
