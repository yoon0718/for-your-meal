package com.example.sf_nos.controller;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import com.example.sf_nos.dao.CameraDao;

@Controller
@CrossOrigin(origins="http://localhost:3000")
public class CameraController {
    
    private static final String directory = "C:/Users/user/Desktop/SF/be/photo/";
    @Autowired
    CameraDao cameraDao;

    @PostMapping("/camera")
    public ResponseEntity<String> Camera(@RequestPart("photo") MultipartFile photo) throws IllegalStateException, IOException, InterruptedException {
        String uuid = UUID.randomUUID().toString();
        String photoname = uuid + ".jpg";
        cameraDao.save_photo(photoname);
        
        String file_path = directory + photoname;
        String pyfile = "C:/Users/user/Desktop/tmp/photo.py";
        photo.transferTo(new File(file_path));

        ProcessBuilder processBuilder = new ProcessBuilder("python", pyfile, file_path);
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
                cameraDao.save_result(photoname, result);
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
