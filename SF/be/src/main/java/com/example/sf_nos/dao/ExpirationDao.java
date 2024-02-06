package com.example.sf_nos.dao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class ExpirationDao {

    @Autowired
    JdbcTemplate jt;

    public List<Map<String,Object>> my_frige() {
        String query = "SELECT * FROM frige";
        return jt.queryForList(query);
    }
    public List<Map<String,Object>> expiration_date() {
        String query = "SELECT * FROM frige ORDER BY date";
        return jt.queryForList(query);
    }
}
