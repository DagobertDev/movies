import { Component } from '@angular/core';
import { Router } from "@angular/router"
import { firstValueFrom } from "rxjs"
import { AuthService } from "../../services/auth.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = ""
  password = ""

  constructor(private authService: AuthService, private router: Router) {
  }

  async signIn() {
    let success = await firstValueFrom(this.authService.signIn(this.email, this.password))
    if (success) {
      await this.router.navigate(['/'])
    }
  }
}
