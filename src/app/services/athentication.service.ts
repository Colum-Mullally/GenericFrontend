import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AthenticationService {
  authenticated = false;

  constructor(private http: HttpClient) {
  }

  authenticate(username: string , password: string , callback) {
    const cred = btoa (username + ':' + password);
    this.http.get('https://colum-mullally-fyp-webservice.herokuapp.com/v1/User/details',
      {headers: new HttpHeaders().set('Authorization', 'Basic ' + cred)}).subscribe(response => {
      // @ts-ignore
      if (response.name) {
        this.authenticated = true;
        console.log('here@');
        console.log(btoa (username + ':' + password));
        sessionStorage.setItem('credentials', btoa (username + ':' + password));
      } else {
        this.authenticated = false;
      }
      return callback && callback();
    });
    return callback && callback();
  }

}
