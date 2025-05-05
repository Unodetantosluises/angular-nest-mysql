import { Injectable } from "@angular/core";
import { environment } from "../../enviroments/environmet";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { Catunimed19 } from "../models/catunimed19.model";

@Injectable({
  providedIn: 'root'
})

export class CatUniMed19Service {
  private apiUrl = `${environment.apiUrl}/catunimed19`;

  constructor(private http: HttpClient) {}

  getCatUniMed19s(): Observable<Catunimed19[]> {
    return this.http.get<Catunimed19[]>(this.apiUrl)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error completo: ', error);
    let errorMessage = 'Ocurrió un error desconocido';
    if(error.error instanceof ErrorEvent) {
      errorMessage = `Error del cliente: ${error.error.message}`;
    } else {
      errorMessage = `Código: ${error.status}, mensaje: ${error.error?.message || error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
