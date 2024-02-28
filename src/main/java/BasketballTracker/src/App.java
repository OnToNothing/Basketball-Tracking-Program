import javafx.application.Application;
import javafx.scene.Scene;
import javafx.stage.Stage;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;

public class App extends Application {
    @Override
    public void start(Stage stage) throws Exception {
        try {
            // Load the FXML file
            FXMLLoader loader = new FXMLLoader();
            // Replace with the actual name of your FXML file
            loader.setLocation(getClass().getResource("basketballGUI.fxml"));

            // Load the root layout from the FXML file
            Parent root = loader.load();

            // Set the scene
            Scene scene = new Scene(root);

            // Set the stage (window) with the scene and show it
            stage.setTitle("Basketball Tracker");
            stage.setScene(scene);
            stage.show();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        launch(args);
    }
}
