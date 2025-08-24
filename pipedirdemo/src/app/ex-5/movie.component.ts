import { Component, OnInit } from '@angular/core';
import { Movie } from '../ex-5/movie';
import { MovieService } from '../ex-5/movie.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: Movie[] = [];
  newMovie: Movie = { movieId: 0, movieName: '', language: '', imdbRating: 0 };
  editMode: boolean = false;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getAllMovies();
  }

  addMovie(): void {
    if (!this.editMode) {
      this.movieService.addMovie({ ...this.newMovie });
    } else {
      this.movieService.updateMovie({ ...this.newMovie });
      this.editMode = false;
    }
    this.newMovie = { movieId: 0, movieName: '', language: '', imdbRating: 0 };
    this.movies = this.movieService.getAllMovies();
  }

  editMovie(movie: Movie): void {
    this.newMovie = { ...movie };
    this.editMode = true;
  }

  deleteMovie(id: number): void {
    this.movieService.deleteMovie(id);
    this.movies = this.movieService.getAllMovies();
  }
}