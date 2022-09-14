import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service"

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {

  signedIn = false

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => this.signedIn = user != null)
  }

  signOut() {
    return this.authService.signOut().subscribe(() => this.signedIn = false)
  }
}
