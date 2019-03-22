import { Component, OnInit } from '@angular/core';
import { AthenticationService } from '../services/athentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private api: AthenticationService) { }

  ngOnInit() {
    if (!this.api.authenticated){
      this.router.navigateByUrl('/login');
    }
  }

}
