package com.amorae.api.config;

import com.amorae.api.model.User;
import com.amorae.api.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            if (!userRepository.existsByEmail("admin@amorae.com")) {
                User adminUser = User.builder()
                        .name("Admin")
                        .email("admin@amorae.com")
                        .password(passwordEncoder.encode("admin123"))
                        .build();
                userRepository.save(adminUser);
                System.out.println("Usuário de teste (admin@amorae.com) criado com sucesso.");
            } else {
                System.out.println("Usuário de teste já existe.");
            }
        };
    }
}
