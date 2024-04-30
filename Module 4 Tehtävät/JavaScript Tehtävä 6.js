// Function to fetch Chuck Norris jokes based on a search term and display them in the results div
function fetchJokesBySearchTerm(searchTerm) {
    fetch(`https://api.chucknorris.io/jokes/search?query=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            const jokeResultsDiv = document.getElementById("jokeResults");
            jokeResultsDiv.innerHTML = ""; // Clear previous results

            data.result.forEach(joke => {
                const article = document.createElement("article");
                const jokeParagraph = document.createElement("p");
                jokeParagraph.textContent = joke.value;
                article.appendChild(jokeParagraph);
                jokeResultsDiv.appendChild(article);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const searchTerm = document.getElementById("searchTerm").value.trim();
    fetchJokesBySearchTerm(searchTerm);
}

// Add event listener to form submission
document.getElementById("searchForm").addEventListener("submit", handleFormSubmit);
