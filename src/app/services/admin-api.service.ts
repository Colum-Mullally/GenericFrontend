import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

const  url = 'https://colum-mullally-fyp-webservice.herokuapp.com';
const apiUrl = url + '/v1/admin';
@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(apiUrl + '/allusers',
      {headers: new HttpHeaders().set('Authorization', 'Basic ' + sessionStorage.getItem('credentials'))});
  }
  promoteUser(username: string): Observable<any> {
    return this.http.post(apiUrl + '/promote' + '?username=' + username,
      {headers: new HttpHeaders().set('Authorization', 'Basic ' + sessionStorage.getItem('credentials'))});
  }
}
