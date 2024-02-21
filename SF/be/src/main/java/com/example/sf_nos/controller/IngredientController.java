package com.example.sf_nos.controller;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.sf_nos.dao.IngredientDao;

@Controller
@CrossOrigin(origins="*")
public class IngredientController {
    @Autowired
    IngredientDao ingredientDao;

    @PostMapping("/ingredient")
    public ResponseEntity<String> ingredient(
        @RequestBody Map<String,Object> data
    ) {
        String ingredient = data.get("ingredient").toString();
        if (data.get("date") != null) {
            String expiration_date = data.get("date").toString();
            ingredientDao.insert_ingredient(ingredient, expiration_date);
        } else {
        int expiration = ingredientDao.find_date(ingredient);
        LocalDate today = LocalDate.now();
        LocalDate date = today.plusDays(expiration);
        DateTimeFormatter change_format = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        String expiration_date = date.format(change_format);
        ingredientDao.insert_ingredient(ingredient, expiration_date);
        }   
        return ResponseEntity.noContent().build();
    }
}
