const AddMovieForm = document.querySelector("#AddMovieForm");

AddMovieForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // make a movie object
  const formData = new FormData(event.target);
  const movieName = formData.get("movieName");
  const movieYear = formData.get("movieYear");
  const movieGenre = formData.get("movieGenre");
  const movie = {
    movieName,
    movieYear,
    movieGenre,
  };

  // append movie to html list
  addToMovieList(movie);

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
  div.appendChild(deleteBtn);

  document.getElementById("movie-list").append(div);
}
