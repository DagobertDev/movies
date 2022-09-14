import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http"
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CredentialsInterceptorService } from "./services/credentials-interceptor.service"

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    LoginComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CredentialsInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
