package main.java.com.project.mysql;

public class DatabaseDriverLoader {

    public static void loadDriver(String driverName) throws ClassNotFoundException {
        Class.forName(driverName);
        System.out.println("Driver loaded!");
    }
}