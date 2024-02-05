package com.example.sf_nos.dao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class FastSearchDao {
    @Autowired
    JdbcTemplate jt;

    // 요리 종류에 따른 레시피 개수
    public int count_cousinetype(String cousinetype) {
        String query = String.format("SELECT COUNT(*) cnt FROM recipe WHERE 요리종류 = '%s'",cousinetype);
        int count_cousinetype = Integer.parseInt(jt.queryForList(query).get(0).get("cnt").toString());
        return count_cousinetype;
    }

    public List<Map<String, Object>> fast_search(String cousinetype, int number) {
        String query = String.format("SELECT * FROM recipe WHERE 요리종류 = '%s' LIMIT 1 OFFSET %s",cousinetype, number);
        return jt.queryForList(query);
    }
}
