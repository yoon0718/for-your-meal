package com.example.sf_nos.controller;

import java.io.File;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
@CrossOrigin(origins="http://localhost:3000")
public class EmotionContorller {

    private static final String directory = "C:/Users/user/Desktop/SF/be/audio/";

    @PostMapping("/loading")
    public ResponseEntity<String> set_emotion(@RequestBody String filename) {
        String file_path = directory + filename;
        File recording = new File(file_path);
        // 모델을 돌린다
        String result = "0";
        return ResponseEntity.ok(result);
        
    }
}
