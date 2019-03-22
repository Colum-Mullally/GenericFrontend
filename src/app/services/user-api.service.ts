import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

const  url = 'https://colum-mullally-fyp-webservice.herokuapp.com';
const apiUrl = url + '/v1/User';
@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }
  getdetails(): Observable<any> {
    return this.http.get(apiUrl + '/details',
      {headers: new HttpHeaders().set('Authorization', 'Basic ' + sessionStorage.getItem('credentials'))});
  }
  getPDFdetails(pdfname: string ): Observable<any> {
    return this.http.get(apiUrl + '/details/' + pdfname,
      {headers: new HttpHeaders().set('Authorization', 'Basic ' + sessionStorage.getItem('credentials'))});
  }
  setTextField(pdfname: string, TextFieldName: string, TextFieldcontent: string ): Observable<any> {
    return this.http.post(apiUrl + '/details/' + pdfname + '/addcontent/' + TextFieldName + '?content=' + TextFieldcontent , {} ,
      {headers: new HttpHeaders().set('Authorization', 'Basic ' + sessionStorage.getItem('credentials'))});
  }
}
