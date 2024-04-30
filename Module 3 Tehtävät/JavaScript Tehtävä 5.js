let picArray = [
    {
        title: "Nature",
        image: "nature.jpg",
        imageCaption: "Beautiful nature scenery",
        description: "Explore the beauty of nature with these stunning landscapes."
    },
    {
        title: "Animals",
        image: "animals.jpg",
        imageCaption: "Adorable animals",
        description: "Get to know the wonderful world of animals with these cute creatures."
    },
    {
        title: "Travel",
        image: "travel.jpg",
        imageCaption: "Exciting travel destinations",
        description: "Embark on an adventure to amazing travel destinations around the world."
    }
];

function createArticles(picArray) {
    let section = document.getElementById("articles");

    picArray.forEach(item => {
        let article = document.createElement("article");
        article.classList.add("card");

        let heading = document.createElement("h2");
        heading.textContent = item.title;

        let figure = document.createElement("figure");
        let image = document.createElement("img");
        image.src = item.image;
        image.alt = item.title;
        let figcaption = document.createElement("figcaption");
        figcaption.textContent = item.imageCaption;
        figure.appendChild(image);
        figure.appendChild(figcaption);

        let description = document.createElement("p");
        description.textContent = item.description;

        article.appendChild(heading);
        article.appendChild(figure);
        article.appendChild(description);

        section.appendChild(article);
    });
}

createArticles(picArray);
