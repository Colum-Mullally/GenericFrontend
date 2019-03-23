import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AthenticationService} from '../services/athentication.service';
import {UserApiService} from '../services/user-api.service';
import {Pdf} from '../models/pdf';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.scss']
})
export class ViewFormComponent implements OnInit {
  pdf: Pdf;

  constructor(private router: Router, private route: ActivatedRoute, private cred: AthenticationService , private api: UserApiService) { }

    ngOnInit() {
      if (!this.cred.authenticated) {
        this.router.navigateByUrl('/login');
      } else {
       this.api.getPDFdetails(this.route.snapshot.params.id).subscribe(res => {
         this.pdf = res;
       });
      }
    }

}
