package com.example.sf_nos.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.sf_nos.dao.EmotionDao;
import com.example.sf_nos.dao.ExpirationDao;


@Controller
@CrossOrigin(origins="*")
public class EmotionResultController {
    
    private static final String directory = "C:/SprintF/SF/be/audio/";
    @Autowired
    EmotionDao emotionDao;
    @Autowired
    ExpirationDao expirationDao;
    
    @PostMapping("/emotionresult")
    public ResponseEntity<Map<String,Object>> emo_result(
        @RequestBody Map<String, Object> data
    ) {
        String filename = (String) data.get("filename");
        String result = (String) data.get("result");
        String count = emotionDao.get_recipe_count(result);
        int rec_menu_num = (int)(Math.random() * Integer.parseInt(count));
        Map<String,Object> rec_menu = emotionDao.get_random_menu(result, rec_menu_num).get(0);
        
        
        List<String> own_ingre = new ArrayList<String>();
        List<Map<String,Object>> myingre = expirationDao.my_ingre();
        String ingredients = rec_menu.get("재료").toString();
        for (Map<String, Object> index : myingre) {
            String ingre = index.get("ingredient").toString();
            if (isInString(ingre, ingredients) && !own_ingre.contains(ingre)) {
                own_ingre.add(ingre);
            }
        }
        rec_menu.put("보유한재료",own_ingre);

        emotionDao.del_result(filename);
        File file = new File(directory + filename);
        file.delete();
        
        return ResponseEntity.ok(rec_menu);   
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
