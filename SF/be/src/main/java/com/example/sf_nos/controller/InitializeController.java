package com.example.sf_nos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.example.sf_nos.dao.InitializeDao;

@Controller
@CrossOrigin(origins="*")
public class InitializeController {
    @Autowired
    InitializeDao initializeDao;
    
    @PostMapping("/initializing")
    public ResponseEntity<String> initializing() {
        initializeDao.create_table();
        int recipe_data = initializeDao.check_recipe_data();
        if (recipe_data == 0) {
            initializeDao.insert_recipe_data();
        }
        int expiration_data = initializeDao.check_expiration_data();
        if (expiration_data == 0) {
            initializeDao.insert_expiration_data();
        }
        return ResponseEntity.noContent().build();
    }
}

