import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "integration",
  templateUrl: "./integration.component.html",
  styleUrls: ["./integration.component.scss"],
})
export class IntegrationComponent implements OnInit {
  formValue!: FormGroup;
  formModal: any;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formValue = this.formBuilder.group({
      adminUsername: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
      adminPassword: ["", Validators.required],
      url: ["", Validators.required],
    });
  }

  save() {
    //Reset Form
    this.formValue.reset();
  }

  get UserName(): FormControl {
    return this.formValue.get("adminUsername") as FormControl;
  }

  get Password(): FormControl {
    return this.formValue.get("adminPassword") as FormControl;
  }

  get URLS(): FormControl {
    return this.formValue.get("url") as FormControl;
  }
}
