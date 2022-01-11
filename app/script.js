const movies = [
  {
    id: 1,
    movieName: "Iron-Man 1",
    movieYear: "2000",
    movieGenre: "Sci-fic",
  },
  {
    id: 2,
    movieName: "Iron-Man 2",
    movieYear: "2002",
    movieGenre: "Sci-fic, Drama",
  },
];

for (let movie of movies) {
  addToMovieList(movie);
}

const AddMovieForm = document.querySelector("#AddMovieForm");

AddMovieForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // make a movie object
  const formData = new FormData(event.target);
  const movieName = formData.get("movieName");
  const movieYear = formData.get("movieYear");
  const movieGenre = formData.get("movieGenre");

  const id = new Date().getTime();

  movies.push({
    id,
    movieName,
    movieYear,
    movieGenre,
  });

  // append movie to html list
  addToMovieList(movies[movies.length - 1]);

  // rest form
  event.target.reset();
});

function addToMovieList(movie) {
  console.log(movie);

  const div = document.createElement("div");
  div.classList.add("movie");

  const h2 = document.createElement("h2");
  h2.textContent = movie.movieName;
  div.appendChild(h2);

  const h3 = document.createElement("h3");
  h3.textContent = movie.movieYear;
  div.appendChild(h3);

  const p = document.createElement("p");
  p.textContent = movie.movieGenre;
  div.appendChild(p);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.setAttribute("btn-id", movie.id);
  deleteBtn.addEventListener("click", function (event) {
    div.remove();
    console.log(movie.id);
    const indexToRemove = movies.findIndex(function (mov) {
      return mov.id == movie.id;
    });
    movies.splice(indexToRemove, 1);
    //for (let i = 0; i < products.length; i++) {
    //movies.id[1] == movie.id) movies.slice(i, 1);

    //}
  });
  div.appendChild(deleteBtn);

  document.getElementById("movie-list").append(div);
}
