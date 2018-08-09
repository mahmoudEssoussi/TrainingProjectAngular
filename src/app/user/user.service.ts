import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { IUser } from './IUser';

@Injectable()
export class UserService {
  private _userUrl = 'assets/user.json';

  constructor(private _http: HttpClient) { }

/*   getUsers(): Observable<IUser[]> {
    return this._http.get<IUser[]>(this._userUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError) );
  } */

  getUsers(): Observable<IUser[]> {
    return this._http.get<IUser[]>(this._userUrl).pipe(
    
      catchError(this.handleError) );}

  getUser(id: number): Observable<IUser> {
    return this.getUsers().pipe(
      map((users: IUser[]) => users.find(p => p.id === id)));
  }


  login(id:number):void{
    this.getUser(id).subscribe(user => {

      localStorage.setItem('currentUser', JSON.stringify(user));
    })
    
  }
  logout():void{localStorage.removeItem('currentUser');}


  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
