// Shows
const URL = import.meta.env.VITE_BASE_API_URL;
// Create
export function createShow(show) {
  // we need to specify what type of request we're making in fetch
  const options = {
    method: "POST",
    // body is a JSON version of our show object we got from state
    body: JSON.stringify(show),
    // tell the server that this is JSON
    headers: {"Content-Type": "application/json"}
  }
  return fetch(`${URL}/shows`, options).then(res => res.json())
}

// Delete
export function destroyShow(id) {
  // options object
  const options = { method: "DELETE" }
  return fetch(`${URL}/shows/${id}`, options)
}

// Index/Get all
export function getAllShows() {
  // this function hjits our Server at the /shows endpoint
  // and returns a PROMISE with some JSON inside
  return fetch(`${URL}/shows`).then(res => res.json())
}

// Show/Get one
export function getOneShow(id) {
  // gets data from the shows/:id route
  // beause we are getting one resource we need to tell the serve
  // WHICH ONE WE WANT
  return fetch(`${URL}/shows/${id}`).then(res => res.json())
}

// Update
export function updateShow(id, show) {
  const options = {
    method: "PUT",
    // body is a JSON version of our show object we got from state
    body: JSON.stringify(show),
    // tell the server that this is JSON
    headers: {"Content-Type": "application/json"}
  }
  return fetch(`${URL}/shows/${id}`, options).then(res => res.json())
}

// Movies

  const url=import.meta.env.VITE_BASE_API_URL;
// create
export function createMovie(movie) {
  const options = {
    method: "POST",
    body: JSON.stringify(movie),
  headers: {"Content-Type": "application/json"} 
}

return fetch(`${URL}/movies`, options)
.then(res => res.json())
}

// delete

export function destroyMovie(id) {
  const options = {method: "DELETE"}
  return fetch(`${URL}/movies/${id}`, options)
}

// index/get all

export function getAllMovies() {
  return fetch(`${URL}/movies`)
  .then(res => res.json())
}

// movie/get one

export function getOneMovie(id) {
  return fetch(`${URL}/movies/${id}`)
  .then(res => res.json())
}

// update

export function updateMovie(id, movie) {
  const options = {
  method: "PUT",
  body: JSON.stringify(movie),
  headers: {"Content-Type": "application/json"}
}
return fetch(`${URL}/movies/${id}`, options)
.then(res => res.json())
}