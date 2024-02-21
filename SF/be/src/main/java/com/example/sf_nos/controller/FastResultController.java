package com.example.sf_nos.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.sf_nos.dao.ExpirationDao;
import com.example.sf_nos.dao.FastResultDao;

@Controller
@CrossOrigin(origins = "*")
public class FastResultController {
    @Autowired
    FastResultDao fastResultDao;
    @Autowired
    ExpirationDao expirationDao;

    @PostMapping("/fastresult")
    public ResponseEntity<Map<String,Object>> fast_result(
        @RequestBody Map<String,Object> menu_name
    ) {
        String menu = menu_name.get("메뉴명").toString();
        Map<String,Object> result = fastResultDao.fast_result(menu).get(0);

        List<String> own_ingre = new ArrayList<String>();
            List<Map<String,Object>> myingre = expirationDao.my_ingre();
            String ingredients = result.get("재료").toString();
            for (Map<String, Object> index : myingre) {
                String ingre = index.get("ingredient").toString();
                if (isInString(ingre, ingredients) && !own_ingre.contains(ingre)) {
                    own_ingre.add(ingre);
                }
            }
            result.put("보유한재료",own_ingre);
        return ResponseEntity.ok(result);
    }

    private static boolean isInString(String value, String str) {
        String[] strArray = str.split(",");
        for (String element : strArray) {
            if (element.equals(value)) {
                return true;
            }
        }
        return false;
    }
}
