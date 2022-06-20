import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Constants} from "../../utils/Constants";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private static get jsonHttpOptions() {
    let headers = new HttpHeaders();
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('X-Requested-With', 'XMLHttpRequest');

    return {headers: headers};
  }

  constructor(private http: HttpClient) {
  }

  get(endpoint: string, param?: any): Observable<any> {
    return this.http.get(ApiService.createUrl(endpoint, param), ApiService.jsonHttpOptions)
      .pipe(catchError(ApiService.handleError));
  }

  post(endpoint: string, data): Observable<any> {
    return this.http.post(ApiService.createUrl(endpoint), data, ApiService.jsonHttpOptions)
      .pipe(
        catchError(ApiService.handleError)
      )
  }

  put(endpoint: string, id: any, data) {
    return this.http.put(ApiService.createUrl(endpoint, {id: id}), data, ApiService.jsonHttpOptions)
      .pipe(
        catchError(ApiService.handleError)
      )
  }

  delete(endpoint: string, id: any) {
    return this.http.delete(ApiService.createUrl(endpoint, {id: id}))
      .pipe(
        catchError(ApiService.handleError)
      )
  }

  private static createUrl(endpoint: string, param?: any): string {
    const protocol = 'https://';
    const serverName = 'angularkurz.itcooking.eu';
    let url = protocol + serverName + Constants.api + endpoint;
    if (param && param.id) {
      url += '/' + param.id;
    }
    return url;
  }

  private static handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error.title}`)
    }
    return throwError(() => error);
  }

}
