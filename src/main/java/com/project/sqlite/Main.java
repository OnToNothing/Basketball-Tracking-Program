package com.project.sqlite;
// import io.javalin.Javalin;
// import io.javalin.http.staticfiles.*;
import io.javalin.*;
import java.sql.*;
import java.nio.file.Files;
import java.nio.file.Paths;

public class Main {
   
    public static void  main(String[] args) {
                //rewrite the above line
        Connection conn = Database.getConnection();
        if (conn == null) {
            return;
        }
        Database.addTable(conn);

          
    
}

}
