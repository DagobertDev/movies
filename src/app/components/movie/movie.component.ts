import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { Movie } from "../../models/movie"
import { MovieService } from "../../services/movie.service"

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  public loading = true
  public id: number
  public movie?: Movie

  constructor(private route: ActivatedRoute, private movieService: MovieService) {
    this.id = route.snapshot.params["id"]
  }

  ngOnInit(): void {
    this.movieService.getById(this.id).subscribe(movie => {
      this.movie = movie
      this.loading = false
    })
  }
}
