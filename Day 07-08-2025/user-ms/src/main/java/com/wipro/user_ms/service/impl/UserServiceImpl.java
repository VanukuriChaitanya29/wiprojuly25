package com.wipro.user_ms.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.wipro.user_ms.dto.NotificationDTO;
import com.wipro.user_ms.entity.User;
import com.wipro.user_ms.repo.UserRepository;
import com.wipro.user_ms.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RestTemplate restTemplate;

    private final String NOTIFICATION_URL = "http://notification-ms/notify";

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(int id) {
        Optional<User> optional = userRepository.findById(id);
        return optional.orElse(null);
    }

    @Override
    public User createUser(User user) {
        User savedUser = userRepository.save(user);
        sendNotification(savedUser, "Created");
        return savedUser;
    }

    @Override
    public User updateUser(int id, User updatedUser) {
        Optional<User> optional = userRepository.findById(id);
        if (optional.isPresent()) {
            User existingUser = optional.get();
            existingUser.setUsername(updatedUser.getUsername());
            existingUser.setPassword(updatedUser.getPassword());
            existingUser.setAddress(updatedUser.getAddress());

            User savedUser = userRepository.save(existingUser);
            sendNotification(savedUser, "Updated");
            return savedUser;
        }
        return null;
    }

    @Override
    public void deleteUser(int id) {
        Optional<User> optional = userRepository.findById(id);
        if (optional.isPresent()) {
            User user = optional.get();
            userRepository.delete(user);
            sendNotification(user, "Deleted");
        }
    }

    private void sendNotification(User user, String action) {
        NotificationDTO dto = new NotificationDTO();
        dto.setUser(user);
        dto.setAction(action);
        restTemplate.postForObject(NOTIFICATION_URL, dto, Void.class);
    }
}
