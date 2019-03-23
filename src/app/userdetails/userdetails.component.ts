import { Component, OnInit } from '@angular/core';
import { AthenticationService } from '../services/athentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserApiService } from '../services/user-api.service';
import {map} from 'rxjs/operators';
import {User} from '../models/user';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private cred: AthenticationService , private api: UserApiService) { }
  user: User;
  ngOnInit() {
    if (!this.cred.authenticated) {
      this.router.navigateByUrl('/login');
    } else {
      this.api.getdetails().subscribe(res => {
        this.user = res;
        }
      );
    }
  }
}
