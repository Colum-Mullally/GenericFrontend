import { Component } from '@angular/core';
import { AthenticationService} from './services/athentication.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fyp-front-end';
  constructor(private app: AthenticationService, private http: HttpClient, private router: Router) {
    this.app.authenticate(undefined, undefined);
  }
  logout() {
      this.app.authenticated = false;
      this.router.navigateByUrl('/login');
  }
}
