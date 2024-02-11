package com.example.sf_nos.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class IngredientDao {
    @Autowired
    JdbcTemplate jt;
    // 해당 재료의 유통기한 확인
    public int find_date(String ingredient) {
        String query = String.format("SELECT date FROM expiration WHERE ingredient = '%s'", ingredient);
        int date = Integer.parseInt(jt.queryForList(query).get(0).get("date").toString());
        return date;
    }
    // 냉장고 DB에 추가하기
    public void insert_ingredient(String ingredient, String date) {
        String query = String.format("INSERT INTO frige (ingredient, date) VALUES ('%s', '%s');", ingredient, date);
        jt.execute(query);
    }
}
