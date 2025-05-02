import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs";
import { CatPmi } from "../models/cat-pmi-model";
import { environment } from "../../enviroments/environmet";

@Injectable({
  providedIn: 'root'
})

export class CatPmiService {
  private apiUrl = `${environment.apiUrl}/cat-pmi`;

  constructor(private http: HttpClient) { }

  getCatPmis(): Observable<CatPmi[]> {
    return this.http.get<CatPmi[]>(this.apiUrl)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error desconocido';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Código: ${error.status}, mensaje: ${error.error?.message || error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
