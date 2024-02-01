package com.example.sf_nos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.example.sf_nos.dao.InitializeDao;

@Controller
public class InitializeController {
    @Autowired
    InitializeDao initializeDao;
    
    @PostMapping("/intializing")
    public @ResponseBody String intialize() {
        initializeDao.intializing();
        return "초기화 완료";
    }
}
