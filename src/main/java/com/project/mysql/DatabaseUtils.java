package main.java.com.project.mysql;

import java.sql.Statement;

public class DatabaseUtils {

    public static void dropAndCreateDatabase(Statement stmt, String dbName) throws Exception {
        stmt.execute("DROP DATABASE IF EXISTS " + dbName);
        stmt.execute("CREATE DATABASE " + dbName);
        stmt.execute("USE " + dbName);
        System.out.println("Database " + dbName + " created successfully...");
    }

    public static void createTables(Statement stmt) throws Exception {

        // Table creation logic
    }

    public static void insertSampleData(Statement stmt) throws Exception {
        // Data insertion logic
    }
}