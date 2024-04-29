var db;

function openDatabase() {
    var request = indexedDB.open("TeamManagementDB", 1);

    request.onsuccess = function(event) {
        db = event.target.result;
        loadRosterNames();  // Call this function once the database is successfully opened
    };

    request.onerror = function(event) {
        console.error("Database error: " + event.target.errorCode);
    };
}

function loadRosterNames() {
    var transaction = db.transaction(["rosters"], "readonly");
    var store = transaction.objectStore("rosters");
    var request = store.openCursor();

    var dropdown = document.getElementById('rosterDropdown');
    dropdown.innerHTML = ''; // Clear existing options
    var defaultOption = document.createElement('option');
    defaultOption.textContent = "Select a roster";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    dropdown.appendChild(defaultOption);

    request.onsuccess = function(event) {
        var cursor = event.target.result;
        if (cursor) {
            var option = document.createElement('option');
            option.value = cursor.value.rosterName;
            option.textContent = cursor.value.rosterName;
            dropdown.appendChild(option);
            cursor.continue();
        }
    }; 

    request.onerror = function(event) {
        console.error("Failed to fetch rosters:", event.target.error);
    };
}

// Initialize the database when the page loads
document.addEventListener('DOMContentLoaded', function() {
    openDatabase();  // Ensuring this calls the correct function
});
