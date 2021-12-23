package com.nikhil.servicemanagement.repository;

import com.nikhil.servicemanagement.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepo extends JpaRepository<User, Integer> {
    User findByUsername(String username);

    User findByUserId(int userId);

    //@Query(value="select username, email from User u where u.user_id =:userId", nativeQuery=true)
    // User getUserDetailsById(int userId);
}
