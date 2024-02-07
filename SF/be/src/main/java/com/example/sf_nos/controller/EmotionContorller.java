package com.example.sf_nos.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

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

    private static final String directory = "C:/SprintF/SF/be/audio/";
    @Autowired
    EmotionDao emotionDao;
    
    @PostMapping("/loading")
    public ResponseEntity<String> set_emotion(@RequestBody String filename) throws IOException, InterruptedException {
        String file_path = directory + filename;
        String feature = file_path;
        String pyfile = "C:/SprintF/SF/be/python/sound_classifier.py";
        
        ProcessBuilder processBuilder = new ProcessBuilder("python", pyfile, feature);
        processBuilder.redirectErrorStream(true);
        
        Process process = processBuilder.start();

        BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
        
        String result = null;
        
        String line;
        while ((line = reader.readLine()) != null) {
            System.out.println(line);
            result = line;
        }
        int exitCode = process.waitFor();
        if (exitCode == 0) {
            System.out.println("Python script executed successfully.");
            if (result != null) {
                System.out.println("Received result from Python: " + result);
                emotionDao.save_result(result, filename);
                return ResponseEntity.ok(result);
            } else {
                System.out.println("No result received from Python.");
                return ResponseEntity.noContent().build();
            }
        } else {
            System.out.println("Error executing Python script. Exit code: " + exitCode);
            return ResponseEntity.noContent().build();
        }
    }
}
