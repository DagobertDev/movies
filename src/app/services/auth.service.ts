import { HttpClient } from "@angular/common/http"
import { Injectable } from '@angular/core';
import { Observable } from "rxjs"
import { environment } from "../../environments/environment"
import { User } from "../models/user"

const url = `${environment.apiUrl}/Auth`

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {
  }

  public signIn(userName: string, password: string): Observable<boolean> {
    return this.httpClient.post<boolean>(`${url}/signIn`, {email: userName, password}, {withCredentials: true})
  }

  public signOut(): Observable<void> {
    return this.httpClient.post<void>(`${url}/signOut`, null)
  }

  public register(userName: string, password: string): Observable<User> {
    return this.httpClient.post<User>(`${url}/register`, {email: userName, password})
  }

  public getCurrentUser(): Observable<User | null> {
    return this.httpClient.get<User | null>(`${url}`)
  }
}
