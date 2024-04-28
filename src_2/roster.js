document.querySelector('.btn-outline-primary').addEventListener('click', function() {
    // Get the input values
    var firstName = document.querySelector('input[placeholder="First Name"]').value.trim();
    var lastName = document.querySelector('input[placeholder="Last Name"]').value.trim();
    var position = document.querySelector('input[placeholder="Position"]').value.trim();
    var number = document.querySelector('input[placeholder="Number"]').value.trim();

    // Validation messages
    var validationMessages = [];
    
    // Validate the input values
    if (!firstName || firstName.length > 60) {
      validationMessages.push("First name cannot be blank or more than 60 characters.");
    }
  
    if (!lastName || lastName.length > 60) {
      validationMessages.push("Last name cannot be blank or more than 60 characters.");
    }
  
    if (!position || position.length > 60) {
      validationMessages.push("Position cannot be blank or more than 60 characters.");
    }
  
    if (!number || number.length > 4 || isNaN(number)) {
      validationMessages.push("Year must be a number and cannot be more than 4 characters.");
    }
  
    // If there are validation messages, join them and show alert, then return without adding a new row
    if (validationMessages.length > 0) {
      alert(validationMessages.join("\n"));
      return;
    }
  // Create player object
  var player = {
    firstName: firstName,
    lastName: lastName,
    position: position,
    number: number
};

// Retrieve the existing players from local storage, parse it, and add new player to the array
var players = JSON.parse(localStorage.getItem('players') || '[]');
players.push(player);
localStorage.setItem('players', JSON.stringify(players));

// Add the new player to the list on the page
addPlayerToList(player);

// Clear the input fields
document.querySelector('input[placeholder="First Name"]').value = '';
document.querySelector('input[placeholder="Last Name"]').value = '';
document.querySelector('input[placeholder="Position"]').value = '';
document.querySelector('input[placeholder="Number"]').value = ''; 
});

// Function to add player to the list in the DOM
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
    // Remove player from local storage as well
    removePlayerFromStorage(player);
    // Remove the list item from the DOM
    listItem.remove();
});

document.querySelector('.list-group').appendChild(listItem);
}

// Function to remove player from local storage
function removePlayerFromStorage(playerToRemove) {
var players = JSON.parse(localStorage.getItem('players') || '[]');
// Filter out the player to remove
players = players.filter(player => player.firstName !== playerToRemove.firstName || player.lastName !== playerToRemove.lastName);
// Save the updated players array back to local storage
localStorage.setItem('players', JSON.stringify(players));
}

// roster.js

$(document).ready(function() {
  // Function to add a new player to the player stats table
  function addPlayerToStats(firstName, lastName) {
      // Assuming you have jQuery loaded
      // Find the player stats table body
      var $tbody = $('#player-stats-table tbody');

      // Construct a new row with the player's information
      var newRow = '<tr>' +
          '<td>' + firstName + ' ' + lastName + '</td>' +
          '<td><input type="number" class="form-control" placeholder="Goals"></td>' +
          '<td><input type="number" class="form-control" placeholder="Assists"></td>' +
          '<td><input type="number" class="form-control" placeholder="Yellow Cards"></td>' +
          '<td><input type="number" class="form-control" placeholder="Red Cards"></td>' +
          '</tr>';

      // Append the new row to the table body
      $tbody.append(newRow);
  }

  // Event listener for the "Add Player" button click
  $('.btn-outline-primary').click(function() {
      // Get the input values from the form
      var firstName = $('input[placeholder="First Name"]').val();
      var lastName = $('input[placeholder="Last Name"]').val();

      // Add the new player to the player stats table
      addPlayerToStats(firstName, lastName);
  });
});

