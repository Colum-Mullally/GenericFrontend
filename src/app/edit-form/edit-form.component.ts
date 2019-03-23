import { Component, OnInit } from '@angular/core';
import {Pdf} from '../models/pdf';
import {ActivatedRoute, Router} from '@angular/router';
import {AthenticationService} from '../services/athentication.service';
import {UserApiService} from '../services/user-api.service';
import {forEach} from '@angular/router/src/utils/collection';
import {count} from 'rxjs/operators';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

  pdf: Pdf;
  isLoadingResults = false;
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
  onFieldupdate(event) {
    this.pdf.attributes[event.target.name].content = event.target.value;
  }

  updateAllFields() {
    for (let attribute of this.pdf.attributes) {
      if (!(attribute.content == null)) {
        this.api.setTextField(this.pdf.name, attribute.name, attribute.content).subscribe(res => {
            console.log(res);
          });
      }
    }
    this.isLoadingResults = true;
    setTimeout(() => {
        this.router.navigate(['/view', this.pdf.name]);
        this.isLoadingResults = false;
      },
      3000);
  }

}
