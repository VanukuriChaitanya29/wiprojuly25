package com.wipro.user_ms.service;

import java.util.List;

import com.wipro.user_ms.entity.User;

public interface UserService {
    List<User> getAllUsers();
    User getUserById(int id);
    User createUser(User user);
    User updateUser(int id, User user);
    void deleteUser(int id);
}