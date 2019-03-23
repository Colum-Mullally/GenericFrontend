import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AthenticationService} from '../services/athentication.service';
import {StorageApiService} from '../services/storage-api.service';
import { DomSanitizer } from '@angular/platform-browser';
import {saveAs as importedSaveAs} from "file-saver";

@Component({
  selector: 'app-download-form',
  templateUrl: './download-form.component.html',
  styleUrls: ['./download-form.component.scss']
})
export class DownloadFormComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private cred: AthenticationService , private api: StorageApiService, private sanitizer: DomSanitizer) { }
  fileUrl: any;

  ngOnInit() {
    if (!this.cred.authenticated) {
      this.router.navigateByUrl('/login');
    } else {
      this.api.fileDownload(this.route.snapshot.params.id).subscribe(res => {
        importedSaveAs(res, this.route.snapshot.params.id);
      });
    }
  }

}
