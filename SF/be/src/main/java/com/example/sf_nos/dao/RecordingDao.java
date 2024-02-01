package com.example.sf_nos.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class RecordingDao {
    @Autowired
    JdbcTemplate jt;
    public void save_recording(String filename) {
        String query = String.format("INSERT INTO recording (filename) VALUES ('%s')", filename);
        jt.execute(query);
    }
}
