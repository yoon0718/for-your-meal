package com.example.sf_nos.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.sf_nos.dao.EmotionDao;


@Controller
@CrossOrigin(origins="http://localhost:3000")
public class EmotionResultController {
    @Autowired
    EmotionDao emotionDao;
    
    @PostMapping("/emotionresult")
    public ResponseEntity<Map<String,Object>> emo_result(@RequestBody String result) {
        String count = emotionDao.get_recipe_count(result);
        int rec_menu_num = (int)(Math.random() * Integer.parseInt(count));
        Map<String,Object> rec_menu = emotionDao.get_random_menu(result, rec_menu_num).get(0);
        return ResponseEntity.ok(rec_menu);
    }

}
