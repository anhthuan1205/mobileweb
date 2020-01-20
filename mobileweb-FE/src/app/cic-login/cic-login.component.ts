import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import {StorageService} from '../service/storage.service';
import {Router} from '@angular/router';

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordNotMatch: true
  };
}

@Component({
  selector: 'app-cic-login',
  templateUrl: './cic-login.component.html',
  styleUrls: ['./cic-login.component.scss']
})
export class CicLoginComponent implements OnInit {
  loginForm: FormGroup;
  message: string;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private tokenStorage: StorageService,
              private  router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group( {
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ''
    }, {validator: comparePassword});
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const {value} = this.loginForm;
      console.log(value);
      this.authService.attemptAuth(value)
        .subscribe(next => {
          console.log(next);
          this.tokenStorage.saveToken(next.token);
          this.message = next.msg;

          this.router.navigate(['inquiry-result']);
        }, error => {
          this.message = error.error.msg;
        });
    }
  }

}
