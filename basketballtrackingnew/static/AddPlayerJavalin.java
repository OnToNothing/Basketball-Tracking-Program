// Version: 1.0
/**
   back end using javalin to create a server to handle requests from the front end
will make a post that will take in a json and add it to a database  
will make a get that will return all the data in the database
will make a get that will return the data for a specific game
*/ 



import io.javalin.Javalin;
import io.javalin.http.Context;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class AddPlayerJavalin {
    public static void main(String[] args) {
        Javalin app = Javalin.create().start(7000);
        app.post("/addPlayer", AddPlayerJavalin::addPlayer);
        app.post("/addPratice", AddPlayerJavalin::addPratice);
    }

    public static void addPlayer(Context ctx) {
        String playerJson = ctx.body();
        try {
            // Parse JSON data (assuming a library like Gson)
            Map<String, String> playerData = new Gson().fromJson(playerJson, Map.class);
            String name = playerData.get("name");
            int year = Integer.parseInt(playerData.get("year"));
            int number = Integer.parseInt(playerData.get("number"));
    
            // Connect to database (replace with your connection details)
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/your_database", "your_username", "your_password");
            String sql = "INSERT INTO players (name, year, number) VALUES (?, ?, ?)";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, name);
            stmt.setInt(2, year);
            stmt.setInt(3, number);
            stmt.executeUpdate();
            conn.close();
    
            
            ctx.status(201); // Created
        } catch (Exception e) {
            e.printStackTrace();
            ctx.status(500); // Internal Server Error
        }
    }

    public static void addPratice(Context ctx) {
        String teamJson = ctx.body();
        try {
            // Parse JSON data (assuming a library like Gson)
            Map<String, String> teamData = new Gson().fromJson(teamJson, Map.class);
            String name = teamData.get("name");
            int year = Integer.parseInt(teamData.get("year"));
            int number = Integer.parseInt(teamData.get("number"));
    
            // Connect to database (replace with your connection details)
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/your_database", "your_username", "your_password");
            String sql = "INSERT INTO players (name, year, number) VALUES (?, ?, ?)";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, name);
            stmt.setInt(2, year);
            stmt.setInt(3, number);
            stmt.executeUpdate();
            conn.close();
    
            
            ctx.status(201); // Created
        } catch (Exception e) {
            e.printStackTrace();
            ctx.status(500); // Internal Server Error
        }
    }
}    