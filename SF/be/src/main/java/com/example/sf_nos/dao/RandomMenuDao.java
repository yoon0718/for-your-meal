package com.example.sf_nos.dao;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class RandomMenuDao {
    @Autowired
    JdbcTemplate jt;

    // 냉장고에 있는 재료 종류의 개수 파악
    public int count_ingredient() {
        String query = "SELECT COUNT(*) cnt FROM frige";
        int counting = Integer.parseInt(jt.queryForList(query).get(0).get("cnt").toString());
        return counting;
    }
    // 재료 중 하나 랜덤으로 선택
    public String random_menu(int counting) {
        String query = String.format("SELECT * FROM frige LIMIT 1 OFFSET %s", counting);
        String ingredient = jt.queryForList(query).get(0).get("ingredient").toString();
        return ingredient;
    }
    // 선택 된 재료가 포함된 메뉴의 개수 파악
    public int count_menu(String ingredient) {
        String query = String.format("SELECT COUNT(*) cnt FROM recipe WHERE FIND_IN_SET('%s', REPLACE(재료, ' ', ',')) > 0",ingredient);
        int menu_count = Integer.parseInt(jt.queryForList(query).get(0).get("cnt").toString());
        return menu_count;
    }
    // 메뉴 중 하나 랜덤으로 선택
    public Map<String,Object> selected_menu(String ingredient, int random_menu_num) {
        String query = String.format("SELECT * FROM recipe WHERE FIND_IN_SET('%s', REPLACE(재료, ' ', ',')) > 0 LIMIT 1 OFFSET %s;",ingredient, random_menu_num);
        return jt.queryForList(query).get(0);
    }
}
