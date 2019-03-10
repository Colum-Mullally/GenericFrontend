import { Component, OnInit } from '@angular/core';
import { RegisterApiService } from '../services/register-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private api: RegisterApiService, private formBuilder: FormBuilder) { }

  userForm: FormGroup;
  username = '';
  password = '';
  isLoadingResults = false;
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username : [null, Validators.required],
      password : [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.register(this.userForm.controls.username.value, this.userForm.controls.password.value)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/login']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
