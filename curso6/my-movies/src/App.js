import { Header } from "./components/Header";
import { MoviesList } from "./components/MoviesList";

function App() {
  return (
    <div className="App">
      <Header />

      <section>
        <MoviesList movies={[{title:'teste'}]}/>
      </section>
    </div>
  );
}

export default App;
