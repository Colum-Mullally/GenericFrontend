import { Component, OnInit } from '@angular/core';
import {StorageApiService} from '../services/storage-api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AthenticationService} from '../services/athentication.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  selectedFile: File = null;
  constructor(private router: Router, private route: ActivatedRoute,
              private cred: AthenticationService , private api: StorageApiService ) { }

  ngOnInit() {
    if (!this.cred.authenticated) {
      this.router.navigateByUrl('/login');
    }
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0] as File;
  }

  onUpload() {
    this.api.fileUpload(this.selectedFile).subscribe(res => {
      this.router.navigate(['/userdetails']);
    });
  }

}
