import { Switch, Route, Redirect } from 'react-router';
import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation/navigation';

const HomePage = lazy(() =>
  import('./components/views/HomePage.js' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./components/views/MoviesPage.js' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import('./components/views/MovieDetailsPage.js' /* webpackChunkName: "movie-details-page" */
  ),
);
const NotFoundPage = lazy(() =>
  import('./components/views/NotFoundView.js' /* webpackChunkName: "not-found-page" */),
);

export default function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Redirect to="/" />

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}


 // "predeploy": "npm run build",
    // "deploy": "netlify deploy -p"