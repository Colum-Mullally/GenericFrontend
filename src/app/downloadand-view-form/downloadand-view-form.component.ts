import { Component, OnInit } from '@angular/core';
import {saveAs as importedSaveAs} from 'file-saver';
import {ActivatedRoute, Router} from '@angular/router';
import {AthenticationService} from '../services/athentication.service';
import {StorageApiService} from '../services/storage-api.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-downloadand-view-form',
  templateUrl: './downloadand-view-form.component.html',
  styleUrls: ['./downloadand-view-form.component.scss']
})
export class DownloadandViewFormComponent implements OnInit {
  fileUrl
  constructor(private router: Router, private route: ActivatedRoute, private cred: AthenticationService , private api: StorageApiService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (!this.cred.authenticated) {
      this.router.navigateByUrl('/login');
    } else {
      this.api.fileView(this.route.snapshot.params.id).subscribe(res => {
        this.fileUrl = window.URL.createObjectURL(new Blob([res], {type: 'application/pdf'}));
        this.sanitizer.bypassSecurityTrustUrl(this.fileUrl);
        window.open(this.fileUrl);
        this.router.navigate(['/view', this.route.snapshot.params.id]);
      });
    }
  }

}
