import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService.js";
class Movie extends Component {
  state = {
    movies: getMovies(),
  };
  handleDelete() {
    const movie = this.state.movies.filter(m => m._id !== movie._id)
    this.setState({movie})
  }

  render() {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={this.state.movies_id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            ;
          </tbody>
        </table>
      </>
    );
  }
}

export default Movie;
