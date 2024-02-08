package com.example.sf_nos.dao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class FastResultDao {
    @Autowired
    JdbcTemplate jt;

    public List<Map<String,Object>> fast_result(String menu_name) {
        String query = String.format("SELECT * FROM recipe WHERE 메뉴명 = '%s'", menu_name);
        return jt.queryForList(query);
    }
}
