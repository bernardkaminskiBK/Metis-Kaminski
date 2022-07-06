import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../utils/Constants";
import {NotificationService} from "./notification.service";
import {User} from "../../models/User";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User | undefined;

  constructor(
    private http: HttpClient,
    private snackBar: NotificationService,
    private storageService: StorageService
  ) {
  }

  getUser(): User | undefined {
    return this.user;
  }

  get isAuthentication(): boolean {
    this.user = this.storageService.loadUser();
    return this.user ? true : false;
  }

  login(username: string, password: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      const endpoint = Constants.endpoints.user.login;
      this.http.post(endpoint, {
        username: username,
        password: password
      }).toPromise().then((result) => {
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
      }).toPromise().then(() => {
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
