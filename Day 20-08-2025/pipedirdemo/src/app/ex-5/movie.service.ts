import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies: Movie[] = [
    { movieId: 1, movieName: 'Inception', language: 'English', imdbRating: 8.8 },
    { movieId: 2, movieName: 'RRR', language: 'Telugu', imdbRating: 8.0 }
  ];

  constructor() {}

  // CREATE
  addMovie(movie: Movie): void {
    this.movies.push(movie);
  }

  // READ
  getAllMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find(m => m.movieId === id);
  }

  // UPDATE
  updateMovie(updatedMovie: Movie): boolean {
    const index = this.movies.findIndex(m => m.movieId === updatedMovie.movieId);
    if (index !== -1) {
      this.movies[index] = updatedMovie;
      return true;
    }
    return false;
  }

  // DELETE
  deleteMovie(id: number): boolean {
    const index = this.movies.findIndex(m => m.movieId === id);
    if (index !== -1) {
      this.movies.splice(index, 1);
      return true;
    }
    return false;
  }
}