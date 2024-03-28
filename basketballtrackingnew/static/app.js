// Select the button to add players
document.querySelector('.add_player_button').addEventListener('click', function() {
    addPlayer();
});

document.querySelector('.sort_player_button').addEventListener('click', function() {
    sortPlayer();
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.archivePanel').style.display = 'none';
    document.querySelector('.practicePanel').style.display = 'none';
})
var newRowLabels = document.createElement('tr');
    newRowLabels.className = 'player-row';

    // Create table cells for labels
    var nameLabelCell = document.createElement('td');
    nameLabelCell.textContent = 'Name';

    var yearLabelCell = document.createElement('td');
    yearLabelCell.textContent = 'Year';

    var numberLabelCell = document.createElement('td');
    numberLabelCell.textContent = 'Number';


document.querySelector('.sort_player_number').addEventListener('click', function() {
    sortPlayerNumber();
});

function addPlayer() {
    // Get the values of the input fields
    var playerName = document.getElementById("PlayerName").value;
    var playerYear = document.getElementById("PlayerYear").value;
    var playerNumber = document.getElementById("PlayerNumber").value;

    // Check if any of the fields are empty
    if (playerName === "" || playerYear === "" || playerNumber === "") {
        alert("Please fill out all fields before adding player data!");
        return; // Exit the function if any field is empty
    }

    // Check if the player already exists
    var playerList = document.getElementById('player-list');
    var rows = playerList.getElementsByClassName('player-data-row');
    for (var i = 0; i < rows.length; i++) {
        var nameCell = rows[i].getElementsByTagName('td')[0];
        var yearCell = rows[i].getElementsByTagName('td')[1];
        var numberCell = rows[i].getElementsByTagName('td')[2];
        if (nameCell.textContent === playerName && yearCell.textContent === playerYear && numberCell.textContent === playerNumber) {
            alert("Player already exists!");
            return; // Exit the function if player already exists
        }
    }

    // Create a new row for the player
    

    // Append label cells to the row
    newRowLabels.appendChild(nameLabelCell);
    newRowLabels.appendChild(yearLabelCell);
    newRowLabels.appendChild(numberLabelCell);

    // Append the label row to the player list
    document.getElementById('player-list').appendChild(newRowLabels);

    // Create a new row for the player data
    var newRowData = document.createElement('tr');
    newRowData.className = 'player-row player-data-row';

    // Create table cells for player data
    var playerNameCell = document.createElement('td');
    playerNameCell.textContent = playerName;

    var playerYearCell = document.createElement('td');
    playerYearCell.textContent = playerYear;

    var playerNumberCell = document.createElement('td');
    playerNumberCell.textContent = playerNumber;

    var optionsCell = document.createElement('td');
    var optionsButton = document.createElement('button');
    optionsButton.textContent = 'Options';
    optionsButton.className = 'options-button';

    var optionsDropdown = document.createElement('div');
    optionsDropdown.className = 'dropdown-content';

    var archivePlayerButton = document.createElement('button');
    archivePlayerButton.textContent = 'Archive Player Info';
    archivePlayerButton.addEventListener('click', function() {
        archivePlayer(playerName, playerYear, playerNumber);
        newRowData.remove(); // Remove the row when delete button is clicked
        newRowLabels.remove(); // Also remove the label row
    });

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Player Info';
    deleteButton.addEventListener('click', function() {
        newRowData.remove(); // Remove the row when delete button is clicked
        newRowLabels.remove(); // Also remove the label row
    });

    optionsDropdown.appendChild(archivePlayerButton);
    optionsDropdown.appendChild(deleteButton);

    optionsButton.appendChild(optionsDropdown);
    optionsCell.appendChild(optionsButton);

    // Append player data cells to the row
    newRowData.appendChild(playerNameCell);
    newRowData.appendChild(playerYearCell);
    newRowData.appendChild(playerNumberCell);
    newRowData.appendChild(optionsCell);

    // Append the data row to the player list
    document.getElementById('player-list').appendChild(newRowData);

    // Clear input fields after adding player
    document.getElementById("PlayerName").value = "";
    document.getElementById("PlayerYear").value = "";
    document.getElementById("PlayerNumber").value = "";
}

function sortPlayer() {
    var playerList = document.getElementById('player-list');
    var rows = playerList.getElementsByClassName('player-data-row');

    var sortedRows = Array.from(rows).sort((a, b) => { 
        var aName = a.getElementsByTagName('td')[0].textContent; 
        var bName = b.getElementsByTagName('td')[0].textContent;
        return aName.localeCompare(bName);
    });

    for (var i = 0; i < sortedRows.length; i++) {
        playerList.appendChild(sortedRows[i]);
    }
}

function archivePlayer(playerName, playerYear, playerNumber) {

// Create a new row for the player
var newRowLabels = document.createElement('tr');
newRowLabels.className = 'player-row';

// Create table cells for labels
var nameLabelCell = document.createElement('td');
nameLabelCell.textContent = 'Name';

var yearLabelCell = document.createElement('td');
yearLabelCell.textContent = 'Year';

var numberLabelCell = document.createElement('td');
numberLabelCell.textContent = 'Number';

// Append label cells to the row
newRowLabels.appendChild(nameLabelCell);
newRowLabels.appendChild(yearLabelCell);
newRowLabels.appendChild(numberLabelCell);

// Append the label row to the player list
document.getElementById('archived_player-list').appendChild(newRowLabels);

// Create a new row for the player data
var newRowData = document.createElement('tr');
newRowData.className = 'player-row';

// Create table cells for player data
var playerNameCell = document.createElement('td');
playerNameCell.textContent = playerName;

var playerYearCell = document.createElement('td');
playerYearCell.textContent = playerYear;

var playerNumberCell = document.createElement('td');
playerNumberCell.textContent = playerNumber;

var optionsCell = document.createElement('td');
var optionsButton = document.createElement('button');
optionsButton.textContent = 'Options';
optionsButton.className = 'options-button';

var optionsDropdown = document.createElement('div');
optionsDropdown.className = 'dropdown-content';


var unarchiveButton = document.createElement('button');
unarchiveButton.textContent = 'Unarchive Player';
unarchiveButton.addEventListener('click', function() {
    newRowData.remove(); // Remove the row when delete button is clicked
    newRowLabels.remove(); // Also remove the label row
    unarchivePlayer(playerName, playerYear, playerNumber);
});

optionsDropdown.appendChild(unarchiveButton);

optionsButton.appendChild(optionsDropdown);
optionsCell.appendChild(optionsButton);

// Append player data cells to the row
newRowData.appendChild(playerNameCell);
newRowData.appendChild(playerYearCell);
newRowData.appendChild(playerNumberCell);
newRowData.appendChild(optionsCell);

// Append the data row to the player list
document.getElementById('archived_player-list').appendChild(newRowData);

}

function unarchivePlayer(playerName, playerYear, playerNumber) {

    // Create a new row for the player
    var newRowLabels = document.createElement('tr');
    newRowLabels.className = 'player-row';

    // Create table cells for labels
    var nameLabelCell = document.createElement('td');
    nameLabelCell.textContent = 'Name';

    var yearLabelCell = document.createElement('td');
    yearLabelCell.textContent = 'Year';

    var numberLabelCell = document.createElement('td');
    numberLabelCell.textContent = 'Number';

    // Append label cells to the row
    newRowLabels.appendChild(nameLabelCell);
    newRowLabels.appendChild(yearLabelCell);
    newRowLabels.appendChild(numberLabelCell);

    // Append the label row to the player list
    document.getElementById('player-list').appendChild(newRowLabels);

    // Create a new row for the player data
    var newRowData = document.createElement('tr');
    newRowData.className = 'player-row';

    // Create table cells for player data
    var playerNameCell = document.createElement('td');
    playerNameCell.textContent = playerName;

    var playerYearCell = document.createElement('td');
    playerYearCell.textContent = playerYear;

    var playerNumberCell = document.createElement('td');
    playerNumberCell.textContent = playerNumber;

    var optionsCell = document.createElement('td');
    var optionsButton = document.createElement('button');
    optionsButton.textContent = 'Options';
    optionsButton.className = 'options-button';

    var optionsDropdown = document.createElement('div');
    optionsDropdown.className = 'dropdown-content';

    var archivePlayerButton = document.createElement('button');
    archivePlayerButton.textContent = 'Archive Player Info';
    archivePlayerButton.addEventListener('click', function() {
        archivePlayer(playerName, playerYear, playerNumber);
        newRowData.remove(); // Remove the row when delete button is clicked
        newRowLabels.remove(); // Also remove the label row
    });

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Player Info';
    deleteButton.addEventListener('click', function() {
        newRowData.remove(); // Remove the row when delete button is clicked
        newRowLabels.remove(); // Also remove the label row
    });

    optionsDropdown.appendChild(archivePlayerButton);
    optionsDropdown.appendChild(deleteButton);

    optionsButton.appendChild(optionsDropdown);
    optionsCell.appendChild(optionsButton);

    // Append player data cells to the row
    newRowData.appendChild(playerNameCell);
    newRowData.appendChild(playerYearCell);
    newRowData.appendChild(playerNumberCell);
    newRowData.appendChild(optionsCell);

    // Append the data row to the player list
    document.getElementById('player-list').appendChild(newRowData);

    // Clear input fields after adding player
    document.getElementById("PlayerName").value = "";
    document.getElementById("PlayerYear").value = "";
    document.getElementById("PlayerNumber").value = "";
}

function sortPlayerNumber() {
    var playerList = document.getElementById('player-list');
    var rows = playerList.getElementsByClassName('player-row');

    var sortedRows = Array.from(rows).sort((a, b) => { 
        var aNumber = parseInt(a.getElementsByTagName('td')[2].textContent); 
        var bNumber = parseInt(b.getElementsByTagName('td')[2].textContent);
        return aNumber - bNumber;
    });

    // Clear the player list before appending sorted rows
    while (playerList.firstChild) {
        playerList.removeChild(playerList.firstChild);
    }

    // Append sorted rows back to the player list
    for (var i = 0; i < sortedRows.length; i++) {
        playerList.appendChild(sortedRows[i]);
    }

}
