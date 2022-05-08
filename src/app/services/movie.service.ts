import { Injectable } from '@angular/core';
import { delay, Observable, of } from "rxjs"
import { Movie } from "../models/movie"

const movies: Movie[] = [
  {id: 1, name: "Movie 1"},
  {id: 2, name: "Movie 2"},
  {id: 3, name: "Movie 3"},
]

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {
  }

  public getAll(): Observable<Movie[]> {
    return of(movies).pipe(delay(1000))
  }

  public getById(id: number): Observable<Movie | undefined> {
    return of(movies.find(movie => movie.id == id)).pipe(delay(1000));
  }
}
