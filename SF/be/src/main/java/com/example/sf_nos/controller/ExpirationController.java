package com.example.sf_nos.controller;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.sf_nos.dao.ExpirationDao;

@Controller
@CrossOrigin(origins="http://localhost:3000")
public class ExpirationController {

    @Autowired
    ExpirationDao expirationDao;

    @PostMapping("/expiration")
    public ResponseEntity<Map<String, List<Map<String,Object>>>> expiration() {
        // 최종적으로 보낼 json
        Map<String, List<Map<String,Object>>> expiration_data = new HashMap<>();
        // 최종 json에 넣을 리스트 (MAP들이 들어올 친구)
        List<Map<String, Object>> exp = new ArrayList<>();

        List<Map<String,Object>> expiration = expirationDao.expiration_date();
        List<Map<String,Object>> frige = expirationDao.my_frige();
        
        LocalDate today = LocalDate.now();
        for (int i = 0; i < expiration.size(); i++) {
            LocalDate date = LocalDate.parse(expiration.get(i).get("date").toString());
            long difference = ChronoUnit.DAYS.between(today, date);
            if (difference < 0) {
                Map<String, Object> danger = new HashMap<>();
                danger.put("ingredient", expiration.get(i).get("ingredient"));
                danger.put("date", expiration.get(i).get("date"));
                danger.put("유통기한", "지남!!!!!");
                exp.add(danger);
            } else if (difference <= 1) {
                Map<String, Object> danger = new HashMap<>();
                danger.put("ingredient", expiration.get(i).get("ingredient"));
                danger.put("date", expiration.get(i).get("date"));
                danger.put("유통기한", "임박!!!!!");
                exp.add(danger);
            }
        }

        expiration_data.put("임박순",exp);
        expiration_data.put("재료순",frige);
        return ResponseEntity.ok(expiration_data);
    }
}
