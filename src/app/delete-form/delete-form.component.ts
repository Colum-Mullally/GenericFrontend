import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AthenticationService} from '../services/athentication.service';
import {StorageApiService} from '../services/storage-api.service';
import {saveAs as importedSaveAs} from 'file-saver';

@Component({
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.scss']
})
export class DeleteFormComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private cred: AthenticationService , private api: StorageApiService) { }

  ngOnInit() {
    if (!this.cred.authenticated) {
      this.router.navigateByUrl('/login');
    }
  }

  onDelete() {
    this.api.fileDelete(this.route.snapshot.params.id).subscribe(res => {
      this.router.navigateByUrl('/userdetails');
    });
  }
}
