// Select the button to add players
document.querySelector('.add_player_button').addEventListener('click', function() {
    addPlayer();
});

document.querySelector('.sort_player_number').addEventListener('click', function() {
    sortPlayerNumber();
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

//var newPracticeRowLabel = document.createElement('tr');
    //newPracticeRowLabel.className = 'practice-player-row';

// Create table cells for labels
var nameLabelCell = document.createElement('td');
nameLabelCell.textContent = 'Name';

var yearLabelCell = document.createElement('td');
yearLabelCell.textContent = 'Year';

var numberLabelCell = document.createElement('td');
numberLabelCell.textContent = 'Number';

// Create table cells for labels in the practice page
//var practiceNameLabelCell = document.createElement('td');
//practiceNameLabelCell.textContent = 'Name';

//var practiceFTACell = document.createElement('td');
//practiceFTACell.textContent = 'FTA';

//var practiceFTMCell = document.createElement('td');
//practiceFTMCell.textContent = 'FTM';

//TEST
//var dateInputCell = document.createElement('td');
//dateInputCell.textContent = 'Enter Date';

// Append label cells to the row
newRowLabels.appendChild(nameLabelCell);
newRowLabels.appendChild(yearLabelCell);
newRowLabels.appendChild(numberLabelCell);

//newPracticeRowLabel.appendChild(practiceNameLabelCell);
//newPracticeRowLabel.appendChild(practiceFTACell);
//newPracticeRowLabel.appendChild(practiceFTMCell);
//newPracticeRowLabel.appendChild(dateInputCell);

// Append the label row to the player list
document.getElementById('player-list').appendChild(newRowLabels);
//Attempting to add row data to the practice page as well
//document.getElementById('practice-list').appendChild(newPracticeRowLabel);


document.querySelector('.sort_player_number').addEventListener('click', function() {
    sortPlayerNumber();
});

var names = []

var practices = document.querySelectorAll('.Practice')
practices = Array.from(practices)

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

    names.push(playerName) // Adds the player to the list of names
    // Add the player to any existing practices
    console.log(practices)
    for (i = 0; i < practices.length; i++) {
        console.log(practices[i].id.split('Practice-')[1])
        
        addPlayerToNewPractice(practices[i].id.split('Practice-')[1].split('practicePanel')[0], playerName)
    }

    // Create a new row for the player data
    var newRowData = document.createElement('tr');
    newRowData.className = 'player-row player-data-row';

    // Create a new row for the player data in the practice page
    var practiceNewRowData = document.createElement('tr');
    practiceNewRowData.className = 'practice-player-row practice-player-data-row';

    // Create table cells for player data
    var playerNameCell = document.createElement('td');
    playerNameCell.textContent = playerName;

    var playerYearCell = document.createElement('td');
    playerYearCell.textContent = playerYear;

    var playerNumberCell = document.createElement('td');
    playerNumberCell.textContent = playerNumber;

    // Create table cells for player data in the practice page
    //var practicePlayerNameCell = document.createElement('td');
    //practicePlayerNameCell.textContent = playerName;

    // Input fields for Free throws and Free throws made
    //var practicePlayerFTACell = document.createElement('input');
    //practicePlayerFTACell.placeholder = 'Free Throws Attempted'
    //practicePlayerFTACell.type = 'text';

    //var practicePlayerFTMCell = document.createElement('input');
    //practicePlayerFTMCell.placeholder = 'Free Throws Made'
    //practicePlayerFTMCell.type = 'text';

    //TEST
    //var dateInput = document.createElement('input');
    //dateInput.placeholder = 'MM-DD-YYYY'
    //dateInput.type = 'text';

    // Create options button for archiving and deleting
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
        practiceNewRowData.remove(); // Remove the row from practice when delete button is clicked
        names.remove(playerName) // Removes the player from the list of names
        for (i = 0; i < practices.length; i++) {
            removePlayerFromNewPractice(practices[i].id.split('Practice-')[1].split('practicePanel')[0], playerName)
        }
    });

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Player Info';
    deleteButton.addEventListener('click', function() {
        newRowData.remove(); // Remove the row when delete button is clicked
        newRowLabels.remove(); // Also remove the label row
        practiceNewRowData.remove(); // Remove the row from practice when delete button is clicked
        names.remove(playerName) // Removes the player from the list of names
        for (i = 0; i < practices.length; i++) {
            removePlayerFromNewPractice(practices[i].id.split('Practice-')[1].split('practicePanel')[0], playerName)
        }
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
    
    // Append the player name data to the practice list row
    //practiceNewRowData.appendChild(practicePlayerNameCell);
    //practiceNewRowData.appendChild(practicePlayerFTACell);
    //practiceNewRowData.appendChild(practicePlayerFTMCell);
    //practiceNewRowData.appendChild(dateInput);

    // Append the data row to the player list
    document.getElementById('player-list').appendChild(newRowData);

    // Attempt to add the data row to the practice list
    //document.getElementById('practice-list').appendChild(practiceNewRowData);

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
    names.push(playerName) // Adds the player to the list of names
    for (i = 0; i < practices.length; i++) {
        console.log(practices[i].id.split('-')[1])
        addPlayerToNewPractice(practices[i].id.split('Practice-')[1].split('practicePanel')[0], playerName)
    }
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

function goToNewPracticePage(date) {
    console.log("test")
    console.log(document.getElementById(`Practice-${date}practicePanel`))
    if (document.getElementById(`Practice-${date}practicePanel`)) {
        document.getElementById(`Practice-${date}practicePanel`).style.display = 'block';
    }
    else {
        createNewPractice(date);
        document.querySelector('.practicePanel').style.display = 'none';
        document.getElementById(`Practice-${date}practicePanel`).style.display = 'block';
    }
}


function createNewPractice(date) {

    //Testing

    console.log("New Practice should be getting created")
    
    // Create elements
    var practicePanelDiv = document.createElement('div');
    practicePanelDiv.className = 'Practice';
    practicePanelDiv.id = `Practice-${date}practicePanel`;
    console.log(practicePanelDiv.className)
  
    var h1 = document.createElement('h1');
    h1.className = 'centered';
    h1.textContent = 'Practice for ' + date;
  
    var homePageDiv = document.createElement('div');
    homePageDiv.className = 'homePage';
  
    var goToHomePageButton = document.createElement('button');
    goToHomePageButton.textContent = 'Go to Home Page';
    goToHomePageButton.onclick = function() {
        document.querySelector('.rosterPanel').style.display = 'block';
        document.querySelector('.practicePanel').style.display = 'none';
        practicePanelDiv.style.display = 'none';
    };
  
    var ReturnToDateSelectionButton = document.createElement('button');
    ReturnToDateSelectionButton.textContent = 'Return to date selection';
    ReturnToDateSelectionButton.onclick = function() {
        document.querySelector('.practicePanel').style.display = 'block';
        practicePanelDiv.style.display = 'none';
    };
  
    var table = document.createElement('table');
  
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    th.className = 'w-[200px]';
    th.textContent = 'Players List:';
  
    var tbody = document.createElement('tbody');
    tbody.id = `Practice-${date}practice-list`;
  
    // Append elements
    tr.appendChild(th);
    thead.appendChild(tr);
    table.appendChild(thead);
    table.appendChild(tbody);
  
    homePageDiv.appendChild(goToHomePageButton);
    homePageDiv.appendChild(ReturnToDateSelectionButton);

    practicePanelDiv.appendChild(h1);
    practicePanelDiv.appendChild(homePageDiv);
    practicePanelDiv.appendChild(table);

    console.log("Before appending: ", practicePanelDiv)
  
    // Append practicePanelDiv to the desired parent element in your HTML
    document.body.appendChild(practicePanelDiv)

    //End of Testing


    var newPracticeRowLabel = document.createElement('tr');
    newPracticeRowLabel.className = 'practice-player-row';

    // Create table cells for labels in the practice page
    var practiceNameLabelCell = document.createElement('td');
    practiceNameLabelCell.textContent = 'Name';

    var practiceFTACell = document.createElement('td');
    practiceFTACell.textContent = 'FTA';

    var practiceFTMCell = document.createElement('td');
    practiceFTMCell.textContent = 'FTM';

    newPracticeRowLabel.appendChild(practiceNameLabelCell);
    newPracticeRowLabel.appendChild(practiceFTACell);
    newPracticeRowLabel.appendChild(practiceFTMCell);

    //Attempting to add row data to the practice page as well
    document.getElementById(`Practice-${date}practice-list`).appendChild(newPracticeRowLabel);

    for (i = 0; i < names.length; i++) {
        addPlayerToNewPractice(date, names[i])
    }
    console.log("Practices: ", practices)
    practices = document.querySelectorAll('.Practice')
    practices = Array.from(practices)
    console.log("Practices now: ", practices)
}

function addPlayerToNewPractice(date, playerName) {

    // Create a new row for the player data in the practice page
    var practiceNewRowData = document.createElement('tr');
    practiceNewRowData.className = 'practice-player-row practice-player-data-row';

    // Create table cells for player data in the practice page
    var practicePlayerNameCell = document.createElement('td');
    practicePlayerNameCell.textContent = playerName;

    // Input fields for Free throws and Free throws made
    var practicePlayerFTACell = document.createElement('input');
    practicePlayerFTACell.placeholder = 'Free Throws Attempted'
    practicePlayerFTACell.type = 'text';

    var practicePlayerFTMCell = document.createElement('input');
    practicePlayerFTMCell.placeholder = 'Free Throws Made'
    practicePlayerFTMCell.type = 'text';

    // Append the player name data to the practice list row
    practiceNewRowData.appendChild(practicePlayerNameCell);
    practiceNewRowData.appendChild(practicePlayerFTACell);
    practiceNewRowData.appendChild(practicePlayerFTMCell);

    // Attempt to add the data row to the practice list
    console.log("The date should be: " + date)
    console.log(`The practice div should be: Practice-${date}practice-list`)
    document.getElementById(`Practice-${date}practice-list`).appendChild(practiceNewRowData);
}

function removePlayerFromNewPractice(date, playerName) {
    var practiceList = document.getElementById(`Practice-${date}practice-list`);
    var rows = practiceList.getElementsByClassName('practice-player-data-row');

    for (var i = 0; i < rows.length; i++) {
        var nameCell = rows[i].getElementsByTagName('td')[0];
        if (nameCell.textContent === playerName) {
            rows[i].remove(); // Remove the row when delete button is clicked
        }
    }
}