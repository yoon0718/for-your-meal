package com.example.sf_nos.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sf_nos.dao.ExpirationDao;

@RestController
@CrossOrigin(origins="*")
public class Expiration_dateController {
    @Autowired
    ExpirationDao expirationDao;
    @GetMapping("/exdate")
    public List<Map<String,Object>> exdate() {
        List<Map<String,Object>> data = expirationDao.exdate();
        return data;
    }
}
