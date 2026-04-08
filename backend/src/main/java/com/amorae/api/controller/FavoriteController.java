package com.amorae.api.controller;

import com.amorae.api.dto.FavoriteResponse;
import com.amorae.api.model.Product;
import com.amorae.api.model.User;
import com.amorae.api.repository.ProductRepository;
import com.amorae.api.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/favorites")
public class FavoriteController {

    private final UserRepository userRepository;
    private final ProductRepository productRepository;

    public FavoriteController(UserRepository userRepository, ProductRepository productRepository) {
        this.userRepository = userRepository;
        this.productRepository = productRepository;
    }

    @GetMapping
    public ResponseEntity<FavoriteResponse> getFavorites() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName(); // In our CustomUserDetailsService we use email as username

        Optional<User> userOptional = userRepository.findByEmail(email);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            List<String> favoriteIds = user.getFavorites().stream()
                    .map(product -> String.valueOf(product.getId()))
                    .collect(Collectors.toList());
            return ResponseEntity.ok(new FavoriteResponse(favoriteIds));
        }

        return ResponseEntity.notFound().build();
    }

    @PostMapping("/{productId}")
    public ResponseEntity<?> addFavorite(@PathVariable Long productId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();

        Optional<User> userOptional = userRepository.findByEmail(email);
        Optional<Product> productOptional = productRepository.findById(productId);

        if (userOptional.isPresent() && productOptional.isPresent()) {
            User user = userOptional.get();
            Product product = productOptional.get();

            user.getFavorites().add(product);
            userRepository.save(user);

            return ResponseEntity.ok().build();
        }

        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<?> removeFavorite(@PathVariable Long productId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();

        Optional<User> userOptional = userRepository.findByEmail(email);
        Optional<Product> productOptional = productRepository.findById(productId);

        if (userOptional.isPresent() && productOptional.isPresent()) {
            User user = userOptional.get();
            Product product = productOptional.get();

            user.getFavorites().remove(product);
            userRepository.save(user);

            return ResponseEntity.ok().build();
        }

        return ResponseEntity.notFound().build();
    }
}
