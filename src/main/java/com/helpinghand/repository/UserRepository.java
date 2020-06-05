package com.helpinghand.repository;

import com.helpinghand.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.NamedNativeQueries;
import javax.persistence.NamedNativeQuery;
import java.lang.annotation.Native;
import java.util.Date;
import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

  User findById(long id);
  User findByPhoneNumber(long phoneNumber);
  @Query(value = "SELECT" +
    " u.* " +
    " FROM" +
    " user u" +
    " JOIN seeker_detail s ON" +
    " u.id = s.user_id" +
    " JOIN ADDRESS a" +
    " ON u.ADDRESS_ID  = a.address_id" +
    " WHERE s.category = ? " +
    " AND u.TYPE = 2" +
    " AND a.state = ? " +
    " AND a.city = ? " +
    " AND s.START_DATE = between  ? and ? " +
    " AND u.id NOT IN (" +
    " SELECT" +
    " m.SEEKER_ID" +
    " FROM" +
    " VOLUNTEER_MAPPING m)" ,nativeQuery = true)
  List<User> findPplNeedingHelp(int category,String state,String city, Date startDate,Date endDate);

  @Query(value = (" SELECT u.* FROM  user u" +
    " JOIN VOLUNTEER_DETAIL s ON" +
    " u.id = s.user_id" +
    " JOIN ADDRESS a" +
    " ON u.ADDRESS_ID  = a.address_id" +
    " WHERE s.category = ? " +
    " AND u.TYPE = 1" +
    " AND a.state = ? " +
    " AND a.city = ? " +
    " AND ?  between  s.START_DATE and s.END_DATE " +
    " AND u.id NOT IN (" +
    " SELECT" +
    " m.VOLUNTEER_ID" +
    " FROM" +
    " VOLUNTEER_MAPPING m)") ,nativeQuery = true)
  List<User> findAvailableVolunteers(int category,String state,String city, Date startDate);
}

