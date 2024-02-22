// package com.example.mysql;
// import io.github.cdimascio.dotenv.Dotenv;
// import java.sql.Connection;
// import java.sql.DriverManager;
// import java.sql.Statement;


// public class DatabaseSetup {

//     private static final String DATABASE_NAME = "BasketballDB";

//     public static void main(String[] args) {
//         Dotenv dotenv = Dotenv.load();
//         String user = dotenv.get("DATABASE_USERNAME");
//         String password = dotenv.get("DATABASE_PASSWORD");
//         String url = buildDatabaseUrl(user, password, DATABASE_NAME);
        
//         try {
//             loadDatabaseDriver();
//             setupDatabase(url);
//         } catch (Exception e) {
//             System.err.println("An error occurred during database setup: " + e.getMessage());
//         }
//     }

//     private static String buildDatabaseUrl(String user, String password, String dbName) {
//         return "jdbc:mysql://localhost:3306/" + dbName + "?user=" + user + "&password=" + password;
//     }

//     private static void loadDatabaseDriver() throws ClassNotFoundException {
//         Class.forName("com.mysql.cj.jdbc.Driver");
//         System.out.println("Driver loaded!");
//     }

//     private static void setupDatabase(String url) throws Exception {
//         try (Connection conn = DriverManager.getConnection(url);
//              Statement stmt = conn.createStatement()) {
            
//             dropAndCreateDatabase(stmt, DATABASE_NAME);
//             createTables(stmt);
//             insertSampleData(stmt);
            
//             System.out.println("Database setup completed successfully.");
//         }
//     }

//     private static void dropAndCreateDatabase(Statement stmt, String dbName) throws Exception {
//         stmt.execute("DROP DATABASE IF EXISTS " + dbName);
//         stmt.execute("CREATE DATABASE " + dbName);
//         stmt.execute("USE " + dbName);
//         System.out.println("Database " + dbName + " created successfully...");
//     }

//     private static void createTables(Statement stmt) throws Exception {
//         stmt.execute(
//             "CREATE TABLE Teams (TeamID INT PRIMARY KEY, TeamName VARCHAR(50), City VARCHAR(50), State VARCHAR(50))");
//         stmt.execute(
//             "CREATE TABLE Players (PlayerID INT PRIMARY KEY, LastName VARCHAR(50), FirstName VARCHAR(50), TeamID INT, Position VARCHAR(50), Number INT, Height INT, Weight INT, Age INT, FOREIGN KEY (TeamID) REFERENCES Teams(TeamID))");
//         System.out.println("Tables created successfully...");
//     }

//     private static void insertSampleData(Statement stmt) throws Exception {
//         // Insert Teams
//         stmt.execute("INSERT INTO Teams VALUES (1, 'Lakers', 'Los Angeles', 'CA')");
//         stmt.execute("INSERT INTO Teams VALUES (2, 'Warriors', 'San Francisco', 'CA')");
//         stmt.execute("INSERT INTO Teams VALUES (3, 'Celtics', 'Boston', 'MA')");
        
//         // Insert Players
//         stmt.execute("INSERT INTO Players VALUES (1, 'James', 'LeBron', 1, 'Forward', 23, 206, 250, 35)");
//         stmt.execute("INSERT INTO Players VALUES (2, 'Davis', 'Anthony', 1, 'Forward', 3, 208, 253, 27)");
//         stmt.execute("INSERT INTO Players VALUES (3, 'Curry', 'Stephen', 2, 'Guard', 30, 191, 185, 32)");
//         stmt.execute("INSERT INTO Players VALUES (4, 'Thompson', 'Klay', 2, 'Guard', 11, 201, 215, 30)");
//         stmt.execute("INSERT INTO Players VALUES (5, 'Tatum', 'Jayson', 3, 'Forward', 0, 203, 208, 22)");
//         stmt.execute("INSERT INTO Players VALUES (6, 'Walker', 'Kemba', 3, 'Guard', 8, 183, 184, 30)");
        
//         System.out.println("Sample data inserted successfully...");
//     }
// }
