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
        StringBuilder query = new StringBuilder("SELECT * FROM recipe WHERE (1=1)");
        addCondition(query, "요리종류", cousinetype);
        addCondition(query, "조리방법", waytocook);
        addConditionforIngredient(query, "재료", ingredients);
        System.out.println(query);
        return jt.queryForList(query.toString());
    }

    private void addCondition(StringBuilder query, String column, String value) {
        if (value != null) {
            query.append(" AND (").append(column+" LIKE ").append("'%"+value+"%')");
        }
    }
    private void addConditionforIngredient(StringBuilder query, String column, String value) {
        if (value != null) {
            if(value == "그 외의 재료") {
                        System.out.println("그 외의 재료를 선택중입니다.");
            } else if (value.equals("다른 면")) {
                query.append(" AND (").append(column+" LIKE ").append("'%"+"메밀면"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"소면"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"우동"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"쌀국수"+"%')");
            } else if (value.equals("다른 고기")) {
                query.append(" AND (").append(column+" LIKE ").append("'%"+"오리고기"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"양고기"+"%'");
            } else if (value.equals("다른 생선류")) {
                query.append(" AND (").append(column+" LIKE ").append("'%"+"고등어"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"황태"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"북어"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"대구"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"백태"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"삼치"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"광어"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"연어"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"민어"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"조기"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"코다리"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"생선살"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"장어"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"아귀"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"가자미"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"꽁치"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"명태"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"병어"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"갈치"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"금태"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"도미"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"흰살생선"+"%')");
            } else if (value.equals("다른 두족류")) {
                query.append(" AND (").append(column+" LIKE ").append("'%"+"주꾸미"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"낙지"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"문어"+"%')");
            } else if (value.equals("그 이외의 해산물")) {
                query.append(" AND (").append(column+" LIKE ").append("'%"+"홍합"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"전복"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"굴"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"꼬막"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"바지락"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"소라"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"멍게"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"꽃게"+"%')");
            } else if (value.equals("요거트류")) {
                query.append(" AND (").append(column+" LIKE ").append("'%"+"요구르트"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"두유"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"요거트"+"%')");
            } else if (value.equals("가공식품")) {
                query.append(" AND (").append(column+" LIKE ").append("'%"+"참치"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"햄"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"소시지"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"베이컨"+"%'");
                query.append(" OR ").append(column+" LIKE ").append("'%"+"떡"+"%')");
            } else {
            query.append(" AND ").append(column+" LIKE ").append("'%"+value+"%'");
            }
        }
    }
}

