import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  // Define API
  apiURL = 'https://gateway.marvel.com/v1/public/characters';
  apiKeys = '?ts=1000&apikey=d2e2854e3cafd514530f0ea064bf9213&hash=00590b2e28a7125caf05f5ea04155067'
  ironManId='/1009368'  
  capAmericaId='/1009220'

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getCharacters(): Observable<any> {
    return this.http.get<any>(this.apiURL+this.apiKeys)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getIronMan(): Observable<any> {
    return this.http.get<any>(this.apiURL+this.ironManId+this.apiKeys)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getCapAmerica(): Observable<any> {
    return this.http.get<any>(this.apiURL+this.capAmericaId+this.apiKeys)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
  // Error handling 
  handleError(error: { error: { message: string; }; status: any; message: any; }) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}