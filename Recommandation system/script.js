document.addEventListener('DOMContentLoaded', () => {
    const genres = document.querySelectorAll('.genre');
    const recommendationList = document.getElementById('recommendation-list');

    // Sample movie data
    const movies = {
        Action: ["Die Hard", "Mad Max: Fury Road", "John Wick"],
        Comedy: ["Superbad", "The Hangover", "Step Brothers"],
        Drama: ["The Godfather", "Forrest Gump", "The Shawshank Redemption"],
        Horror: ["The Exorcist", "Get Out", "A Nightmare on Elm Street"],
        Romance: ["Pride and Prejudice", "The Notebook", "La La Land"]
    };

    genres.forEach(genreButton => {
        genreButton.addEventListener('click', () => {
            const genre = genreButton.getAttribute('data-genre');
            displayRecommendations(genre);
        });
    });

    function displayRecommendations(genre) {
        // Clear previous recommendations
        recommendationList.innerHTML = '';

        // Get the movies for the selected genre
        const recommendedMovies = movies[genre];

        // Display the recommendations
        recommendedMovies.forEach(movie => {
            const listItem = document.createElement('li');
            listItem.textContent = movie;
            recommendationList.appendChild(listItem);
        });
    }
});
