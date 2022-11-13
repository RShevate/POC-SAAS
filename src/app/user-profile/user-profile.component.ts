import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AccountService } from "app/services/account.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"],
})
export class UserProfileComponent implements OnInit {
  userName: string = "";
  password: any = "";
  formValue!: FormGroup;
  msg: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.formValue = this.formBuilder.group({
      userName: [""],
      password: [""],
    });
  }
  public login() {
    this.userName = this.formValue.value.userName;
    this.password = this.formValue.value.password;
    console.log("Hello");
    console.log(this.userName);
    console.log(this.password);

    //Store logIn userId in localStorage
    // sessionStorage.setItem('session',JSON.stringify(this.userName,this.password));

    this.accountService.login(this.userName, this.password);

    if (this.userName == "admin" && this.password == "admin12") {
      this.router.navigate(["/dashboard"]);
    } else {
      this.msg = "Login Failed! Please enter valid username or password";
    }
  }
}
