package com.project.sqlite;
import java.sql.*;
public class Database { 
    public static Connection getConnection() {
        try {
            Class.forName("org.sqlite.JDBC");
            String url = "jdbc:sqlite:src/main/java/com/project/sqlite/sqlitedb.db";
            Connection conn = DriverManager.getConnection(url);
            System.out.println("Connection to SQLite has been established.");
            return conn;
        } catch (ClassNotFoundException e) {
            System.out.println("SQLite JDBC driver not found. Add the library to your project.");

        } catch (SQLException e) {
            System.out.println("SQL error occurred: " + e.getMessage());
            e.printStackTrace();
            System.out.println();
        }
        return null;
    }

    public static void addRowPlayer(Connection conn, String lastName, String firstName, int number, String position, int year) {
        String sql = "INSERT INTO player(LastName, FirstName, Number, Position, Year) VALUES(?,?,?,?,?)";
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, lastName);
            pstmt.setString(2, firstName);
            pstmt.setInt(3, number);
            pstmt.setString(4, position);
            pstmt.setInt(5, year);
            pstmt.executeUpdate();
            System.out.println("Player has been added to the database.");
        } catch (SQLException e) {
            System.out.println("Failed to add player: " + e.getMessage());
        }
    }

    public static void addRowPractice(Connection conn, String date, int threeTM, int threeTA, int ftm, int fta, int player_id) {
        String sql = "INSERT INTO practice(date, \"3TM\", \"3TA\", FTM, FTA, player_id) VALUES(?,?,?,?,?,?)";
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, date);
            pstmt.setInt(2, threeTM);
            pstmt.setInt(3, threeTA);
            pstmt.setInt(4, ftm);
            pstmt.setInt(5, fta);
            pstmt.setInt(6, player_id);
            pstmt.executeUpdate();
            System.out.println("Practice session has been added to the database.");
        } catch (SQLException e) {
            System.out.println("Failed to add practice session: " + e.getMessage());
        }
    }
   
    public static void addTable(Connection conn) {
        // SQL statement for creating a new table
        //player table already exists in the database, so we wil create tables for every practice session
        //get todays date and create a table for that date
        // create a table for the date
        
        String sqlPlayer = "CREATE TABLE IF NOT EXISTS player ("
                 + "id INTEGER PRIMARY KEY, "
                 + "LastName TEXT NOT NULL, "
                 + "FirstName TEXT NOT NULL, "
                 + "Number INTEGER NOT NULL, "
                 + "Position TEXT NOT NULL, "
                 + "Year INTEGER NOT NULL"
                 + ");";



        String sqlPractice = "CREATE TABLE IF NOT EXISTS practice ("
            + "date DATE PRIMARY KEY, "
            + "\"3TM\" INTEGER, "
            + "\"3TA\" INTEGER, "
            + "FTM INTEGER, "
            + "FTA INTEGER, "
            + "player_id INTEGER, "
            + "FOREIGN KEY (player_id) REFERENCES player(id)"
            + ");";



        try (Statement stmt = conn.createStatement()) {
            stmt.execute(sqlPlayer);
            System.out.println("Table 'players' has been created.");
            stmt.execute(sqlPractice);
            System.out.println("Table 'practice' has been created.");
        } catch (SQLException e) {
            System.out.println("Failed to create table: " + e.getMessage());

        }

        
        
    }


}
