package com.example.sf_nos.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class InitializeDao {
    @Autowired
    JdbcTemplate jt;

    public void intializing() {
        String create_recording = """
            CREATE TABLE IF NOT EXISTS `recording` (
            `filename` VARCHAR(255) NOT NULL,
            `result` VARCHAR(255));
            """;
        jt.execute(create_recording);
    }
}
