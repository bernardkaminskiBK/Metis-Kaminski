import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Constants} from "../../utils/Constants";
import {NotificationService} from "./notification.service";
import {User} from "../../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static get jsonHttpOptions() {
    let headers = new HttpHeaders();
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('X-Requested-With', 'XMLHttpRequest');

    return {headers: headers};
  }

  private user: User | undefined;

  constructor(private http: HttpClient, private snackBar: NotificationService) {
  }

  getUser(): User | undefined {
    return this.user;
  }

  get isAuthentication(): boolean {
    const user = localStorage.getItem('user');
    if (user) {
      this.user = JSON.parse(user) as User;
    }
    return this.user ? true : false;
  }

  login(username: string, password: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      const endpoint = Constants.endpoints.user.login;
      this.http.post(endpoint, {
        username: username,
        password: password
      }, UserService.jsonHttpOptions).toPromise().then((result) => {
        if (result) {
          this.user = new User(result);
          resolve(this.user);
        } else {
          reject();
          this.snackBar.notification(Constants.failedLoginMsg);
        }
      }).catch((error) => {
        reject();
        console.error(error);
        this.snackBar.notification(Constants.failedLoginMsg);
      });
    });
  }

  createReview(comment: string, productId: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http.post(Constants.endpoints.user.createReview, {
        productId: productId,
        message: comment
      }, UserService.jsonHttpOptions).toPromise().then(() => {
        resolve();
        this.snackBar.notification(Constants.successAddedCommentMsg);
      }).catch(() => {
        reject()
        this.snackBar.notification(Constants.failedAddedCommentMsg);
      });
    });
  }

  logout(): void {
    this.user = undefined;
    localStorage.clear();
  }
}
