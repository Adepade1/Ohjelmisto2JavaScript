function displaySeries(seriesData) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; // Clear previous results

    seriesData.forEach(series => {
        const article = document.createElement("article");
        const nameHeader = document.createElement("h2");
        const detailsLink = document.createElement("a");
        const image = document.createElement("img");
        const summaryDiv = document.createElement("div");

        nameHeader.textContent = series.show.name;
        detailsLink.textContent = "Details";
        detailsLink.href = series.show.url;
        detailsLink.target = "_blank";
        image.src = series.show.image?.medium || "NoImageAvailable.jpg";
        image.alt = series.show.name;
        summaryDiv.innerHTML = series.show.summary;

        article.appendChild(nameHeader);
        article.appendChild(detailsLink);
        article.appendChild(image);
        article.appendChild(summaryDiv);

        resultsContainer.appendChild(article);
    });
}

function handleFormSubmit(event) {
    event.preventDefault();

    const query = document.getElementById("query").value.trim();

    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            // Display series information
            displaySeries(data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

document.getElementById("searchForm").addEventListener("submit", handleFormSubmit);
