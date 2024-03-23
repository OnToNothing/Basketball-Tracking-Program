package main.java.com.project.mysql;

public class DatabaseConfiguration {
    private final String user;
    private final String password;
    private final String dbName;

    public DatabaseConfiguration(String user, String password, String dbName) {
        this.user = user;
        this.password = password;
        this.dbName = dbName;
    }

    public String buildDatabaseUrl() {
        return "jdbc:mysql://localhost:3306/" + dbName + "?user=" + user + "&password=" + password;
    }
}