package com.amorae.api.dto;

import java.util.List;

public class FavoriteResponse {
    private List<String> favorites;

    public FavoriteResponse() {}

    public FavoriteResponse(List<String> favorites) {
        this.favorites = favorites;
    }

    public List<String> getFavorites() {
        return favorites;
    }

    public void setFavorites(List<String> favorites) {
        this.favorites = favorites;
    }
}
