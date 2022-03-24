import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  forgotPasswordForm: FormGroup = new FormGroup({});
  email = '';
  token = '';
  isTokenPresent = false;
  type = '';
  constructor(  private fb: FormBuilder,
    private router: Router,) {  this.createForgotPasswordForm();}

  ngOnInit(): void {
  }

  createForgotPasswordForm(): void {
    this.forgotPasswordForm = this.fb.group({
      password: [
        '',
        [
          Validators.required,
        ],
      ],
      conformPassword: [, [Validators.required]],
    });
  }
  validateFormField(field: string): boolean {
    const control = this.forgotPasswordForm.controls[field];
    return control.invalid && (control.dirty || control.touched);
  }
  
  validateConformPassword(): boolean {
    return (
      this.forgotPasswordForm.value.password &&
      this.forgotPasswordForm.value.conformPassword &&
      this.forgotPasswordForm.value.password ===
        this.forgotPasswordForm.value.confirmPassword
    );
  }

  changePassword(){
    console.log(this.createForgotPasswordForm)
    this.router.navigateByUrl('/auth/login')
  }
}
