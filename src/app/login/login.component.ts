import { Component } from '@angular/core';
import { GetSetUserService } from '../get-set-user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public role: string = 'NONE'

  constructor(private _userService: GetSetUserService) { }

  public loginForm = new FormGroup({
    userName: new FormControl(undefined, [Validators.required]),
    password: new FormControl(undefined, [Validators.required, Validators.minLength(8)])
  })

  public checkUserData(): void {
    const formValue = this.loginForm.value;
    const userName = formValue.userName || null || undefined;
    const password = formValue.password || null || undefined;
    const user = this._userService.getUser();
    if (user.userName === userName && user.password === password) {
      if (user.role === 'admin') {
        this.role = 'ADMİN'
      } else {
        this.role = 'USER'
      }
    } else {
      this.role = 'ERROR'
    }
    this.loginForm.reset();
  }
}
