import { Component, OnInit } from '@angular/core';
import { AthenticationService } from '../services/athentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private api: AthenticationService, private formBuilder: FormBuilder) {
  }

  userForm: FormGroup;
  username = '';
  password = '';
  isLoadingResults = false;

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.authenticate(this.userForm.controls.username.value, this.userForm.controls.password.value, () => {
      if (this.api.authenticated) {
        this.isLoadingResults = false;
        this.router.navigate(['/userdetails']);
      } else {
        this.isLoadingResults = false;
      }
    });
  }
}
