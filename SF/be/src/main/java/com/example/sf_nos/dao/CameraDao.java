package com.example.sf_nos.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CameraDao {
    @Autowired
    JdbcTemplate jt;
    public void save_photo(String photoname) {
        String query = String.format("INSERT INTO photo (photoname) VALUES ('%s')", photoname);
        jt.execute(query);
    }

    public void save_result(String photoname, String result) {
        String query = String.format("UPDATE photo SET result = '%s' WHERE photoname = '%s'", result, photoname);
        jt.execute(query);
    }
}
