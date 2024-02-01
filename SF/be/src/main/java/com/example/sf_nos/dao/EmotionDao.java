package com.example.sf_nos.dao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class EmotionDao {
    @Autowired
    JdbcTemplate jt;

    // 해당 감정에 맞는 레시피 개수 가져오기
    public String get_recipe_count(String result) {
        String query = String.format("SELECT COUNT(*) cnt FROM recipe WHERE 감정 = '%s'", result);
        String count = jt.queryForList(query).get(0).get("cnt").toString();
        return count;
    }
    public List<Map<String,Object>> get_random_menu(String result, int num) {
        String query = String.format("SELECT * FROM recipe WHERE 감정 = '%s' LIMIT 1 OFFSET %s", result, num);
        return jt.queryForList(query);
    }
}
