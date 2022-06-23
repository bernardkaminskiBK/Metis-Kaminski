import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Constants} from "../../utils/Constants";
import {UserService} from "./UserService";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private get jsonHttpOptions() {
    let headers = new HttpHeaders();
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('X-Requested-With', 'XMLHttpRequest');

    if (this.userService.isAuthentication) {
      headers = headers.set('Authorization', 'Basic ' + this.userService.getUser()!.token);
    }

    return {headers: headers};
  }

  constructor(private http: HttpClient, private userService: UserService) {
  }

  get(endpoint: string, param?: any): Observable<any> {
    return this.http.get(this.createUrl(endpoint, param), this.jsonHttpOptions)
      .pipe(catchError(this.handleError));
  }

  post(endpoint: string, data): Observable<any> {
    return this.http.post(this.createUrl(endpoint), data, this.jsonHttpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  put(endpoint: string, id: any, data) {
    return this.http.put(this.createUrl(endpoint, {id: id}), data, this.jsonHttpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  delete(endpoint: string, id: any) {
    return this.http.delete(this.createUrl(endpoint, {id: id}))
      .pipe(
        catchError(this.handleError)
      )
  }

  private createUrl(endpoint: string, param?: any): string {
    const protocol = 'https://';
    const serverName = 'angularkurz.itcooking.eu';
    let url = protocol + serverName + Constants.api + endpoint;
    if (param && param.id) {
      url += '/' + param.id;
    }
    return url;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error.title}`)
    }
    return throwError(() => error);
  }

}
