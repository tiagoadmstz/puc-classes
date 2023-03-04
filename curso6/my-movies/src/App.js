import { useEffect, useState } from "react";
import { MoviesService } from "./api/MoviesService";
import { Header } from "./components/Header";
import { MoviesList } from "./components/MoviesList";
import { MovieContainer } from "./styles/MoviesContainer";

function App() {

  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const { data } = await MoviesService.getMovies();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <Header />

      <MovieContainer>
        <MoviesList movies={ movies }/>
      </MovieContainer>
    </div>
  );
}

export default App;
