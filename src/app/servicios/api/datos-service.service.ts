import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {tap, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DatosServiceService {

  url="http://localhost:8080/api";
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
    };
  }

  
  getAllPersonas(componente:string): Observable<any> {
    
    return this.http.get(`${this.url}/${componente}`).pipe(        
        tap(data => console.log(data)),
        catchError(this.handleError<[]>('verTodos', []))
   
        );
  
  }

  search(componente:string, filtro:any): Observable<any>{
    return this.http.get(`${this.url}/${componente}/search?filtro=${filtro}`).pipe(        
      tap(data => console.log(data)),
      catchError(this.handleError<[]>('verTodos', []))
 
      );

  }
 

}