import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import './index.css';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import PersonDetails from './pages/PersonDetails';
import Statistics from './pages/Statistics';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Switch>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Route path="/person-details">
            <PersonDetails />
          </Route>
          <Route path="/movie-details">
            <MovieDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
