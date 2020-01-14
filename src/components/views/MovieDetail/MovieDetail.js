import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE } from "../../config";
import MainImage from "../../views/LandingPage/Sections/MainImage";
import MovieInfo from "./Sections/MovieInfo";
import SimilarMovies from "./Sections/SimilarMovies";
function MovieDetailPage(props) {
  const movieId = props.match.params.movieId;
  const [Movie, setMovie] = useState([]);
  const [LoadingForMovie, setLoadingForMovie] = useState(true);

  useEffect(() => {
    let endpointForMovieInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    fetchDetailInfo(endpointForMovieInfo);
  }, []);

  const fetchDetailInfo = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        console.log(result);
        setMovie(result);
        setLoadingForMovie(false);
      })
      .catch(error => console.error("Error:", error));
  };

  return (
    <div>
      {!LoadingForMovie ? (
        <MainImage
          image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${Movie.backdrop_path}`}
          title={Movie.original_title}
          text={Movie.overview}
        />
      ) : (
        <div>loading...</div>
      )}

      <div style={{ width: "85%", margin: "1rem auto" }}>
        {!LoadingForMovie ? <MovieInfo movie={Movie} /> : <div>loading...</div>}

        <br />

        <SimilarMovies />
      </div>
    </div>
  );
}

export default MovieDetailPage;
