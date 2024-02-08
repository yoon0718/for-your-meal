package com.example.sf_nos.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.sf_nos.dao.FastResultDao;

@Controller
@CrossOrigin(origins = "*")
public class FastResultController {
    @Autowired
    FastResultDao fastResultDao;

    @PostMapping("/fastresult")
    public ResponseEntity<Map<String,Object>> fast_result(
        @RequestBody Map<String,Object> menu_name
    ) {
        String menu = menu_name.get("메뉴명").toString();
        Map<String,Object> result = fastResultDao.fast_result(menu).get(0);
        return ResponseEntity.ok(result);
    }
}
