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

function trackNewPractice() {
    // Retrieve the selected date from the input field
    var selectedDate = document.getElementById("select-date").value;

    // Check to make sure the input isn't empty
    if(selectedDate === "") {
        // Display an alert to notify the user
        alert("Please select a date.");
        return; // Exit the function
    }

    // Create a Date object from the selected date string
    var dateObj = new Date(selectedDate);

    // Adjust the date to account for the time zone offset
    var timezoneOffset = dateObj.getTimezoneOffset(); // Get timezone offset in minutes
    dateObj = new Date(dateObj.getTime() + timezoneOffset * 60000); // Add offset in milliseconds

    // Format the date in the "Month Day, Year" format
    var formattedDate = formatDate(dateObj);

    // Create a new panel with the formatted date and similar formatting
    var panelHTML = `
        <div class="col-md-6 col-lg-3 mb-4">
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${formattedDate}</h5>
                    <p class="card-text">Total Practices: 0</p>
                    <p class="card-text">Unique Players: 0</p>
                    <p class="card-text">Attendance Rate: 0%</p>
                </div>
            </div>
        </div>
    `;

    // Append the new panel to the main container
    var mainContainer = document.getElementById("main-container");
    mainContainer.insertAdjacentHTML('beforeend', panelHTML);

    document.getElementById("select-date").value = "";
}


function formatDate(date) {
    // Array of month names
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    // Get the month, day, and year from the Date object
    var month = monthNames[date.getMonth()];
    var day = date.getDate();
    var year = date.getFullYear();

    // Format the date string as "Month Day, Year"
    var formattedDate = month + " " + day + ", " + year;
    return formattedDate;
}
