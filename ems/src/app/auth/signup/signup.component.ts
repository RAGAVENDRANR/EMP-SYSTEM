import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup = new FormGroup({});
  submitted = false;
  checked = true;
  constructor(private formBuilder: FormBuilder,private router: Router) { 
    this.signUpForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      company: ['', Validators.required],
      mobile: ['', Validators.required],
      termsandconditions: [true, Validators.requiredTrue],
      password: [
        '',
        [
          Validators.required,
          
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          
        ],
      ],
    });
  }
  ngOnInit(){
  }
  onsubmit(): void {
    let obj = {
      name: this.signUpForm.controls['firstname'].value,
      email: this.signUpForm.controls['email'].value,
      company: this.signUpForm.controls['company'].value,
      mobile: this.signUpForm.controls['mobile'].value.toString(),
      password: this.signUpForm.controls['password'].value,
    };
    console.log(obj);
      this.signUpForm.reset();
  }
  
  isInvalid(firstname: string): boolean {
    return (
      (this.submitted || !this.signUpForm.controls[firstname].pristine) &&
      this.signUpForm.controls[firstname].errors !== null
    );
  }
}
