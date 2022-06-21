import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Icategories } from './icategories';
import { MessageService } from './message.service';
import { Users } from './users';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private icategoriesUrl = 'api/icategories'; // URL to web api
  private usersURL = 'api/users'; //Url to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  /** Get heroes from the server */
  getIcategories(): Observable<Icategories[]> {
    return this.http.get<Icategories[]>(this.icategoriesUrl).pipe(
      tap((_) => this.log('fetched heroes')),
      catchError(this.handleError<Icategories[]>('getIcategories', []))
    );
  }

  /** GET Username Password Information for all the users*/
  getUser(): Observable<Users[]> {
    return this.http
      .get<Users[]>(this.usersURL)
      .pipe(catchError(this.handleError<Users[]>('getUser')));
  }

  /** GET hero by id. Return `undefined` when id not found */
  getIcategoriesNo404<data>(id: number): Observable<Icategories> {
    const url = `${this.icategoriesUrl}/?id=${id}`;
    return this.http.get<Icategories[]>(url).pipe(
      map((heroes) => heroes[0]), //returns a {0|1} element array
      tap((h) => {
        const outcome = h ? 'fetched' : 'did not find';
        this.log(`${outcome} icategory id=${id}`);
      }),
      catchError(this.handleError<Icategories>(`getIcategories = id=${id}`))
    );
  }

  /** GET hero by id. Will 404 if not found */
  getIcategory(id: number): Observable<Icategories> {
    const url = `${this.icategoriesUrl}/${id}`;
    return this.http.get<Icategories>(url).pipe(
      tap((_) => this.log(`fetched inventory category id=${id}`)),
      catchError(this.handleError<Icategories>(`inventory category id=${id}`))
    );
  }
  /** GET heroes whose name contains search term */
  searchIcategories(term: string): Observable<Icategories[]> {
    if (!term.trim()) {
      //if not search term, return empty hero array
      return of([]);
    }
    return this.http
      .get<Icategories[]>(`${this.icategoriesUrl}/?name=${term}`)
      .pipe(
        tap((x) =>
          x.length
            ? this.log(`found categories matching "${term}"`)
            : this.log(`no categories matching "${term}"`)
        ),
        catchError(this.handleError<Icategories[]>('searchIcategories', []))
      );
  }
  ///////////// ----------**Save Methods** ----------/////////////

  /** POST: add a new hero to the server */
  addIcategory(Icategory: Icategories): Observable<Icategories> {
    return this.http
      .post<Icategories>(this.icategoriesUrl, Icategory, this.httpOptions)
      .pipe(
        tap((newHero: Icategories) =>
          this.log(`added inventory category w/ id=${newHero.id}`)
        ),
        catchError(this.handleError<Icategories>('addIcategory'))
      );
  }
  /** DELETE: delete the hero from the server */
  deleteIcategory(id: number): Observable<Icategories> {
    const url = `${this.icategoriesUrl}/${id}`;

    return this.http.delete<Icategories>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted Inventory id=${id}`)),
      catchError(this.handleError<Icategories>('deleteIcategory'))
    );
  }
  /** PUT: update the hero on the server */
  updateIcategory(icategories: Icategories): Observable<any> {
    return this.http
      .put(this.icategoriesUrl, icategories, this.httpOptions)
      .pipe(
        tap((_) => this.log(`updated Inventory id=${icategories.id}`)),
        catchError(this.handleError<any>('updateIcategory'))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - option value to return as observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      //TODO: better job of transforming error for consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`Inventory: ${message}`);
  }
}
