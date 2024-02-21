package com.example.sf_nos.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.sf_nos.dao.FastSearchDao;

@Controller
@CrossOrigin(origins = "*")
public class FastSearchController {
    @Autowired
    FastSearchDao fastSearchDao;

    private final Map<String, String> cousinetype_dic = new HashMap<>();

    @PostMapping("/fastsearch")
    public ResponseEntity<Map<String,Object>> fast_search(
        @RequestBody String cousinetype
    ) {
        cousinetype_dic.put("0","밥");
        cousinetype_dic.put("1","반찬");
        cousinetype_dic.put("2","국&찌개");
        cousinetype_dic.put("3","일품");
        cousinetype_dic.put("4","후식");
        cousinetype_dic.put("5","기타");
        
        int count_cousinetype = fastSearchDao.count_cousinetype(cousinetype_dic.get(cousinetype).toString());
        List<Map<String, Object>> menus;
        List<Integer> random_numbers = create_number(count_cousinetype, 6);
        menus = new ArrayList<>();
        for (int i : random_numbers) {
            menus.addAll(fastSearchDao.fast_search(cousinetype_dic.get(cousinetype).toString(), i));
        }
        Map<String,Object> response = new HashMap<>();
        for (int i = 0; i < menus.size(); i++) {
            response.put("menu" + (i + 1), menus.get(i));
        }
        return ResponseEntity.ok(response);
    }

    private List<Integer> create_number(int count_cousinetype, int count) {
        List<Integer> random_numbers = new ArrayList<>();
        Random random = new Random();
        while (random_numbers.size() < count) {
            int random_number = random.nextInt(count_cousinetype);
            if (!random_numbers.contains(random_number)) {
                random_numbers.add(random_number);
            }
        }
        return random_numbers;
    }
}
