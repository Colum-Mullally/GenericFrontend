import { Injectable } from '@angular/core';
import {Observable, of, pipe, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
const  url = 'http://localhost:8090';
const apiUrl = url + '/v1/register';
@Injectable({
  providedIn: 'root'
})
export class RegisterApiService {

  constructor(private http: HttpClient) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  register(username: string , password: string ): Observable<any> {
    return this.http.post(apiUrl + '?username=' + username + '&password=' + password,
      {}
    );
  }
}
