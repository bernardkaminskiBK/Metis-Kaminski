import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {UserService} from "../services/UserService";
import {catchError, Observable, tap, throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class AuthenticateInterceptor implements HttpInterceptor {

  constructor(private userService: UserService, private router: Router) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Authorization': this.userService.isAuthentication ? 'Basic ' + this.userService.getUser()!.token : ''
      }
    });

    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          if (event.status === 401) {
            this.router.navigateByUrl('login');
          }
        }
      }),
      catchError((error) => {
        if (error && error.status === 401) {
          this.router.navigateByUrl('login');
        }
        return throwError(error);
      })
    );
  }

}
