package com.example.mysql;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class DatabaseInitializer {
    private final String url;

    public DatabaseInitializer(String url) {
        this.url = url;
    }

    public void setupDatabase() throws Exception {
        try (Connection conn = DriverManager.getConnection(url);
             Statement stmt = conn.createStatement()) {
            
            DatabaseUtils.dropAndCreateDatabase(stmt, "BasketballDB");
            DatabaseUtils.createTables(stmt);
            DatabaseUtils.insertSampleData(stmt);
            
            System.out.println("Database setup completed successfully.");
        }
    }
}
