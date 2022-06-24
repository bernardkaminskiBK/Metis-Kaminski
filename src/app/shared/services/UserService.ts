import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Constants} from "../../utils/Constants";
import {NotificationService} from "./notification.service";
import {User} from "../../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static get jsonHttpOptions() {
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
    if(user) {
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
          this.snackBar.notification('Username or password is incorrect');
        }
      }).catch((error) => {
        reject();
        console.error(error);
        this.snackBar.notification('Username or password is incorrect');
      });
    });
  }

  logout(): void {
    this.user = undefined;
    localStorage.clear();
  }
}
