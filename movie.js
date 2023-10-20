let searchButton = document.getElementById("searchButton")
let movieInput = document.getElementById('movieInput')
let movieInfo = document.getElementById("movieInfo")


searchButton.addEventListener('click', () => {
    const movieName = movieInput.value;
    if (movieName) {
        fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=6ddf134a`)
        .then((response) => response.json())
        .then((data) => {
            if (data.Response == "True") {
                movieInfo.innerHTML = `
                    <img>${data.Poster}<img>
                    <h2>${data.Title}</h2>
                    <p>Год выпуска: ${data.Year}</p>
                    <p>Режиссер: ${data.Director}</p>
                    <p>Номинации: ${data.Awards}</p>
                    <p>Страна: ${data.Country}</p>
                    <p>Жанр: ${data.Genre}</p>
                    <p>Язык: ${data.Language}</p>
                    <p>Plot: ${data.Plot}</p>
                    <p>Год: ${data.Year}</p>
                    <p>Оценка IMDB: ${data.imdbRating}</p>
                `;
console.log(data);
            } else {
                movieInfo.innerHTML = "Фильм не найден";
            }
        })
        .catch((error) => {
            console.error(error);
            movieInfo.innerHTML = "Произошла ошибка";
        });
} else {
    movieInfo.innerHTML = "Пожалуйста, введите название фильма";
}
});