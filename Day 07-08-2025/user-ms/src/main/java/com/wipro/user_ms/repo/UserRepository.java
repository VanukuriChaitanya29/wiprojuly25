package com.wipro.user_ms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wipro.user_ms.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
