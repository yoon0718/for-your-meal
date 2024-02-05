package com.example.sf_nos.dao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CategoryDao {
    @Autowired
    JdbcTemplate jt;

    public List<Map<String,Object>> category(
        String cousinetype,
        String waytocook,
        String ingredients
    ) {
        StringBuilder query = new StringBuilder("SELECT * FROM recipe WHERE 1=1");
        addCondition(query, "요리종류", cousinetype);
        addCondition(query, "조리방법", waytocook);
        addCondition(query, "재료", ingredients);
        return jt.queryForList(query.toString());
    }

    private void addCondition(StringBuilder query, String column, String value) {
        if (value != null) {
            query.append(" AND ").append(column+" LIKE ").append("'%"+value+"%'");
        }
    }
}

