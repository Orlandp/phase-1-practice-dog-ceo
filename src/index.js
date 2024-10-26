console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imageContainer = document.getElementById("dog-image-container");
            data.message.forEach(imageUrl => {
                const img = document.createElement("img");
                img.src = imageUrl;
                imageContainer.appendChild(img);
            });
        });
});

document.addEventListener("DOMContentLoaded", () => {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breedsContainer = document.getElementById("dog-breeds");
            Object.keys(data.message).forEach(breed => {
                const li = document.createElement("li");
                li.innerText = breed;
                breedsContainer.appendChild(li);
            });
        });
});

document.addEventListener("DOMContentLoaded", () => {
    const breedsContainer = document.getElementById("dog-breeds");

    breedsContainer.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            event.target.style.color = "blue"; // Choose any color you prefer
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedsContainer = document.getElementById("dog-breeds");
    const breedSelect = document.getElementById("breed-dropdown");
    let allBreeds = [];

    // Fetch breeds and store them
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            allBreeds = Object.keys(data.message);
            renderBreeds(allBreeds);
        });

    // Render breeds to the page
    function renderBreeds(breeds) {
        breedsContainer.innerHTML = ""; // Clear existing list
        breeds.forEach(breed => {
            const li = document.createElement("li");
            li.innerText = breed;
            breedsContainer.appendChild(li);
        });
    }

    // Filter breeds by selected letter
    breedSelect.addEventListener("change", (event) => {
        const selectedLetter = event.target.value;
        const filteredBreeds = allBreeds.filter(breed => breed.startsWith(selectedLetter));
        renderBreeds(filteredBreeds);
    });
});

