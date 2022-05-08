import {Component, OnInit} from '@angular/core';
import {Movie} from "../../models/movie"
import {MovieService} from "../../services/movie.service"

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  public movies: Movie[] = []

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getAll().subscribe(movies => this.movies = movies)
  }
}
