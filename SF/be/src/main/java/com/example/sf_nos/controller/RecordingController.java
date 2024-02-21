package com.example.sf_nos.controller;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import com.example.sf_nos.dao.RecordingDao;

@Controller
@CrossOrigin(origins="*")
public class RecordingController {
    @Autowired
    RecordingDao recordingDao;
    
    @PostMapping("/recording")
    public ResponseEntity<String> RecordUpload(
        @RequestPart("audioFile") MultipartFile audioFile) throws IllegalStateException, IOException {
        String uuid = UUID.randomUUID().toString();
        String filename = uuid + ".wav";
        recordingDao.save_recording(filename);
        audioFile.transferTo(new File("C:/SprintF/SF/be/audio/" + filename));
        return ResponseEntity.ok(filename);
    }
    
}
