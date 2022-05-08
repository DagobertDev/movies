import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs"
import {Movie} from "../models/movie"

const movies = [
  {name: "Movie 1"},
  {name: "Movie 2"},
  {name: "Movie 3"},
]

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor() { }

  public getAll(): Observable<Movie[]>{
    return of(movies)
  }
}
