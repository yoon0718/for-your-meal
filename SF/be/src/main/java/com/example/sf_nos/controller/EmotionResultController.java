package com.example.sf_nos.controller;

import java.io.File;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.sf_nos.dao.EmotionDao;


@Controller
@CrossOrigin(origins="*")
public class EmotionResultController {
    
    private static final String directory = "C:/SprintF/SF/be/audio/";
    @Autowired
    EmotionDao emotionDao;
    
    @PostMapping("/emotionresult")
    public ResponseEntity<Map<String,Object>> emo_result(
        @RequestBody Map<String, Object> data,
        @RequestParam(name = "home",required = false) String home
    ) {
        if (home == null) {
            String result = (String) data.get("result");
            String count = emotionDao.get_recipe_count(result);
            int rec_menu_num = (int)(Math.random() * Integer.parseInt(count));
            Map<String,Object> rec_menu = emotionDao.get_random_menu(result, rec_menu_num).get(0);
            return ResponseEntity.ok(rec_menu);
        }
        else {
            String filename = (String) data.get("filename");
            emotionDao.del_result(filename);
            File file = new File(directory + filename);
            file.delete();
            return ResponseEntity.noContent().build();
        }
    }

}
