import { Injectable } from "@angular/core";
import { environment } from "../../enviroments/environmet";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { CatPmibcc } from '../models/cat-pmibcc.model';

@Injectable({
  providedIn: 'root'
})

export class CatPmiBccService {
  private apiUrl = `${environment.apiUrl}/cat-pmiBcc`;

  constructor(private http: HttpClient) { }

  getcatpmiBccs(): Observable<CatPmibcc[]> {
    return this.http.get<CatPmibcc[]>(this.apiUrl)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error desconocido';

    if(error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Código: ${error.status}, mensaje: ${error.error?.message || error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
