const addMovieBtn = document.getElementById("add-movie-btn");
const searchMovieBtn = document.getElementById("search-btn");
const movies = [];

//to render movies on screen
const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (!movies.length) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    let text = movie.info.title + "-";
    //outputting dynamic property
    for (const key in movie.info) {
      if (key !== "title") {
        text += `${key}:${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  //Store all inputs in an object
  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };

  movies.push(newMovie);
  renderMovies();
};

//Adding Filter or Search  Functionality

const searchHandler = () => {
  //read the user input
  const userInput = document.getElementById("filter-title").value;
  renderMovies(userInput);
};

searchMovieBtn.addEventListener("click", searchHandler);
addMovieBtn.addEventListener("click", addMovieHandler);
