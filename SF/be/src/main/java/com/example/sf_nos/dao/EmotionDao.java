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

    // 결과 값 저장하기
    public void save_result(String result, String filename) {
        String query = String.format("UPDATE recording SET result = '%s' WHERE filename = '%s'", result, filename);
        jt.execute(query);
    }
    // 해당 감정에 맞는 레시피 개수 가져오기
    public String get_recipe_count(String result) {
        String query = String.format("SELECT COUNT(*) cnt FROM recipe WHERE 감정 LIKE '%%%s%%'", result);
        String count = jt.queryForList(query).get(0).get("cnt").toString();
        return count;
    }
    // 해당 감정에 맞는 레시피 중 랜덤으로 하나 추천
    public List<Map<String,Object>> get_random_menu(String result, int num) {
        String query = String.format("SELECT * FROM recipe WHERE 감정 LIKE '%%%s%%' LIMIT 1 OFFSET %s", result, num);
        return jt.queryForList(query);
    }
    // DB에서 삭제
    public void del_result(String filename) {
        String query = String.format("DELETE FROM recording WHERE filename = '%s'", filename);
        jt.execute(query);
    }
}
