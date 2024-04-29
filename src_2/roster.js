
var db;

// Open or create the database
function openDatabase() {
    var request = indexedDB.open("TeamManagementDB", 1);

    request.onupgradeneeded = function(event) {
        db = event.target.result;
        if (!db.objectStoreNames.contains('rosters')) {
            var objectStore = db.createObjectStore('rosters', { keyPath: 'id', autoIncrement: true });
            objectStore.createIndex('rosterName', 'rosterName', { unique: false });
        }
    };

    request.onsuccess = function(event) {
        db = event.target.result;
        console.log("Database opened successfully.");
    };

    request.onerror = function(event) {
        console.error("Database error: " + event.target.errorCode);
    };
}

function addRoster(rosterName) {
  var transaction = db.transaction(["rosters"], "readwrite");
  var store = transaction.objectStore("rosters");

  var roster = {
      rosterName: rosterName,
      createdAt: new Date() // Store the creation date
  };

  var request = store.add(roster);

  request.onsuccess = function() {
      console.log("Roster added to the database", roster);
  };

  request.onerror = function(event) {
      console.error("Error adding roster: ", event.target.error);
  };
}

// Function to add player to the list in the DOM and to the database
function addPlayerToList(player) {
  var listItem = document.createElement('li');
  listItem.className = 'list-group-item';
  listItem.innerHTML = `
      <div class="row">
          <div class="col-md-3">${player.firstName}</div>
          <div class="col-md-3">${player.lastName}</div>
          <div class="col-md-3">${player.position}</div>
          <div class="col-md-2">${player.number}</div>
          <div class="col-md-1 d-flex justify-content-end">
              <button class="btn btn-outline-danger btn-sm delete-btn">
                  <i class="fa fa-trash" aria-hidden="true"></i>
              </button>
          </div>
      </div>
  `;

  // Add event listener for the delete button in this row
  listItem.querySelector('.delete-btn').addEventListener('click', function() {
      listItem.remove(); // Remove the list item from the DOM
      console.log("Player removed from the list");
  });

  document.getElementById('player-list').appendChild(listItem);
}


document.querySelector('.btn-outline-primary').addEventListener('click', function() {
  var firstName = document.querySelector('input[placeholder="First Name"]').value.trim();
  var lastName = document.querySelector('input[placeholder="Last Name"]').value.trim();
  var position = document.querySelector('input[placeholder="Position"]').value.trim();
  var number = document.querySelector('input[placeholder="Number"]').value.trim();

  var player = {
      firstName: firstName,
      lastName: lastName,
      position: position,
      number: number
  };

  // Add the player to the UI list (not yet saving to IndexedDB for players)
  addPlayerToList(player);

  // Clear the input fields
  document.querySelector('input[placeholder="First Name"]').value = '';
  document.querySelector('input[placeholder="Last Name"]').value = '';
  document.querySelector('input[placeholder="Position"]').value = '';
  document.querySelector('input[placeholder="Number"]').value = ''; 
});

document.getElementById('save-roster-btn').addEventListener('click', async function() {
  try {
      await saveDatabase(db); // Now 'db' is accessible
      // rest of your code...
  } catch (error) {
      // error handling...
  }
});

document.getElementById('save-roster-btn').addEventListener('click', function() {
  var rosterName = document.getElementById('rosterNameInput').value;
  if (rosterName) {
      addRoster(rosterName);
  } else {
      alert('Please enter a roster name.');
  }
});

// Initialize the database when the page loads
document.addEventListener('DOMContentLoaded', function() {
  openDatabase();
});





