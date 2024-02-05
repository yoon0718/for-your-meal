package com.example.sf_nos.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.sf_nos.dao.CategoryDao;

@Controller
@CrossOrigin(origins="http://localhost:3000")
public class CategoryController {
    @Autowired
    CategoryDao categoryDao;

    @PostMapping("/category")
    public ResponseEntity<List<Map<String,Object>>> category(
        @RequestBody Map<String,Object> selection
    ) {
        String cousinetype = (String) selection.get("요리종류");
        String waytocook = (String) selection.get("조리방법");
        String ingredients = (String) selection.get("재료");
        List<Map<String,Object>> rec_menu = categoryDao.category(cousinetype, waytocook, ingredients);
        return ResponseEntity.ok(rec_menu);
       // 서브프로세스
    }
}

