package com.example.sf_nos.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.sf_nos.dao.RandomMenuDao;

@Controller
@CrossOrigin(origins="*")
public class RandomMenuController {
    @Autowired
    RandomMenuDao randomMenuDao;

    @PostMapping("/randommenu")
    public ResponseEntity<Map<String,Object>> get_random_menu() {
        // 냉장고에 있는 재료 중 랜덤으로 하나 선택
        int counting = randomMenuDao.count_ingredient();
        int random_ingre_num = (int)(Math.random() * counting);
        String ingredient = randomMenuDao.random_menu(random_ingre_num);
        // 선택 된 재료가 포함된 메뉴의 개수
        int count_menu = randomMenuDao.count_menu(ingredient);
        int random_menu_num = (int)(Math.random() * count_menu);
        // 선택 된 메뉴
        Map<String,Object> selected_menu = randomMenuDao.selected_menu(ingredient, random_menu_num);
        selected_menu.put("선택된재료",ingredient);
        return ResponseEntity.ok(selected_menu);
    }
}
