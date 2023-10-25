import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetSetUserService } from '../get-set-user.service';
import { UserModel } from '../user-model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private _userService: GetSetUserService) {}

  public signUpForm = new FormGroup({
    userName: new FormControl(undefined, [Validators.required]),
    password: new FormControl(undefined, [Validators.required, Validators.minLength(8)]),
    role: new FormControl(undefined, [Validators.required])
  })


  public onSubmit(): void {
    const formValue = this.signUpForm.value;
    const userName = formValue.userName || null || undefined;
    const password = formValue.password || null || undefined;
    const role = formValue.role || null || undefined;
    const user = new UserModel(userName, password, role)
    this._userService.setUser(user)
    this.signUpForm.reset()
  }
}
