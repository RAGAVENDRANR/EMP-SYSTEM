import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  forgotPasswordForm: FormGroup = new FormGroup({});
  email = '';
  token = '';
  isTokenPresent = false;
  type = '';
  constructor( private fb: FormBuilder,
    private router: Router,) {  this.createForgotPasswordForm();}

  ngOnInit(): void {
  }
  createForgotPasswordForm(): void {
    this.forgotPasswordForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
        ],
      ],
      conformPassword: [null, [Validators.required]],
    });
  }
  validateFormField(field: string): boolean {
    const control = this.forgotPasswordForm.controls[field];
    return control.invalid && (control.dirty || control.touched);
  }
  sendResetLink(){
        this.router.navigateByUrl('/auth/login');
  }
}
