import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

const  url = 'https://colum-mullally-fyp-webservice.herokuapp.com';
const apiUrl = url + '/v1/storage';
@Injectable({
  providedIn: 'root'
})
export class StorageApiService {

  constructor(private http: HttpClient) { }
  fileUpload(file: File ): Observable<any> {
    const fd = new FormData();
    fd.append('file', file, file.name)
    return this.http.post(apiUrl + '/uploadFile', fd,
      {headers: new HttpHeaders().set('Authorization', 'Basic ' + sessionStorage.getItem('credentials'))});
  }
}
