import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Pmi2019 } from '../models/pmi2019.model';
import { environment } from "../../enviroments/environmet";
import { catchError, Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class Pmi2019Service {
  private apiUrl = `${environment.apiUrl}/pmi2019`;

  constructor(private http: HttpClient) {}

  getPmi2019s(): Observable<Pmi2019[]> {
    return this.http.get<Pmi2019[]>(this.apiUrl)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = `Error: ${error.error.message}`;

    if(error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Código: ${error.status}, mensaje: ${error.error?.message || error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
