package com.example.sf_nos.controller;

import java.io.File;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.sf_nos.dao.EmotionDao;

@Controller
@CrossOrigin(origins="http://localhost:3000")
public class EmotionContorller {

    private static final String directory = "C:/Users/TaeHwan Lim/Desktop/SF/be/audio/";
    @Autowired
    EmotionDao emotionDao;
    
    @PostMapping("/loading")
    public ResponseEntity<String> set_emotion(@RequestBody String filename) {
        String file_path = directory + filename;
        File recording = new File(file_path);
        // 모델을 돌린다
        String result = "1";
        emotionDao.save_result(result, filename);
        return ResponseEntity.ok(result);
        
    }
}
