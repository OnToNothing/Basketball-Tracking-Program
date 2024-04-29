document.addEventListener("DOMContentLoaded", function() {
    // Add event listener for filter select
    var filterSelect = document.getElementById("filter");
    filterSelect.addEventListener("change", function() {
        var filterValue = this.value;
        filterPlayers(filterValue);
    });
});

function filterPlayers(filterValue) {
    var players = document.querySelectorAll("tr[isArchived]");

    players.forEach(function(player) {
        var isArchived = player.getAttribute("isArchived");

        if (filterValue === "all") {
            player.style.display = "table-row"; // Show all players
        } else if (filterValue === "archived" && isArchived === "true") {
            player.style.display = "table-row"; // Show archived players
        } else if (filterValue === "active" && isArchived !== "true") {
            player.style.display = "table-row"; // Show active players
        } else {
            player.style.display = "none"; // Hide players that don't match the filter
        }
    });
}
