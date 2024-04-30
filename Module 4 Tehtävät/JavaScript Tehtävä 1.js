// Add event listener to form submission
document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the search query entered by the user
    let query = document.getElementById("query").value.trim();

    // Make a request to the TVMaze API
    fetch("https://api.tvmaze.com/search/shows?q=" + query)
        .then(response => response.json())
        .then(data => {
            // Log the information about the TV series to the console
            console.log(data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});
