package com.example.mysql;
import io.github.cdimascio.dotenv.Dotenv;

public class MainApplication {

    public static void main(String[] args) {
        Dotenv dotenv = Dotenv.load();
        String user = dotenv.get("DATABASE_USERNAME");
        String password = dotenv.get("DATABASE_PASSWORD");
        DatabaseConfiguration config = new DatabaseConfiguration(user, password, "BasketballDB");
        String url = config.buildDatabaseUrl();
        
        try {
            DatabaseDriverLoader.loadDriver("com.mysql.cj.jdbc.Driver");
            DatabaseInitializer initializer = new DatabaseInitializer(url);
            initializer.setupDatabase();
        } catch (Exception e) {
            System.err.println("An error occurred during database setup: " + e.getMessage());
        }
    }
}
