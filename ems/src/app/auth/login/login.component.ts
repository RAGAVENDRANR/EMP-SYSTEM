import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signInForm: FormGroup = new FormGroup({});
  submitted = false;

  constructor(public router:Router,public fb:FormBuilder) {
    this.signInForm = this.fb.group({
      email: [null, [Validators.required,Validators.email]],
      password: [null, [Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
    });
   }

  ngOnInit() {
  }
  onsubmit(): void {
    let obj = {
      email: this.signInForm.controls['email'].value,
      password: this.signInForm.controls['password'].value,
    };
    console.log(obj)
    this.router.navigate(['/dashboard'])
  }
  
}
