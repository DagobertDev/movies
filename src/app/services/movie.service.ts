import { HttpClient } from "@angular/common/http"
import { Injectable } from '@angular/core';
import { Observable } from "rxjs"
import { environment } from "../../environments/environment"
import { Movie } from "../models/movie"

const url = `${environment.apiUrl}/movies`

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(url)
  }

  public getById(id: number): Observable<Movie | undefined> {
    return this.httpClient.get<Movie>(`${url}/${id}`)
  }
}
