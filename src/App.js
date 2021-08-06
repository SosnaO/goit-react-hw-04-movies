// import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation/navigation";
import { Route } from "react-router-dom";
import HomePage from './components/views/HomePage/HomePage'
import MoviesPage from './components/views/MoviesPage/MoviesPage'
// import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";

function App() {
  return (
    <>
    <Navigation />
    <Route path="/" exact>
      <HomePage />
    </Route>

    <Route path="/movies" exact>
      <MoviesPage />
    </Route>

   {/* <MovieDetailsPage /> */}
 </>
  );
}

export default App;
