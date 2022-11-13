import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  constructor(private http: HttpClient, private router: Router) {}

  private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
  private UserName = new BehaviorSubject<string>(
    localStorage.getItem("username")
  );

  login(username: string, password: any) {
    console.log(username);
    console.log(password);
    this.loginStatus.next(true);
    localStorage.setItem("loginStatus", JSON.stringify("1"));
    localStorage.setItem("username", JSON.stringify(username));
    localStorage.setItem("password", JSON.stringify(password));
  }

  checkLoginStatus(): boolean {
    return false;
  }

  get isLoggedIn() {
    return this.loginStatus.asObservable();
  }
  get CurrentUserName() {
    return this.UserName.asObservable();
  }
}
