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
