export const getAllMovies = () => {
  return (
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
  )
}

export const getMovieData = (id) => {
  return (
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
  )
}

export const getVideoData = (id) => {
  return (
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
    .then(response => response.json())
  )
}
