document.addEventListener('DOMContentLoaded', function() {
    // Function to load players from local storage and populate the table
    function loadPlayers() {
        const players = JSON.parse(localStorage.getItem('players') || '[]');
        const playerStatsBody = document.getElementById('playerStatsBody');

        players.forEach(player => {
            const row = playerStatsBody.insertRow();
            row.innerHTML = `
                <td>${player.name}</td>
                <td>${player.number}</td>
                <td><input type="number" value="${player.freeThrowAttempts}" class="form-control free-throw-attempts"></td>
                <td><input type="number" value="${player.freeThrowsMade}" class="form-control free-throws-made"></td>
                <td class="shot-percentage">${calculatePercentage(player.freeThrowsMade, player.freeThrowAttempts)}</td>
                <td>
                    <button class="btn btn-primary btn-sm mr-1 edit-btn">Edit</button>
                    <button class="btn btn-danger btn-sm delete-btn">Delete</button>
                </td>
            `;
        });
    }

    // Function to calculate shot percentage
    function calculatePercentage(made, attempts) {
        if(attempts === 0) return '0%';
        return ((made / attempts) * 100).toFixed(2) + '%';
    }

    // Event listener for the save button
    document.getElementById('saveStats').addEventListener('click', function() {
        // Save player stats to local storage or send to server
        alert('Stats saved!');
        // Placeholder for actual save functionality
    });

    // Load players when the document is ready
    loadPlayers();
});
