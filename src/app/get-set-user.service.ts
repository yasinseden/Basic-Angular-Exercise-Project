import { Injectable } from '@angular/core';
import { UserModel } from './user-model';

export const LOCAL_STORAGE_USER_KEY = 'userdata'

@Injectable({
  providedIn: 'root'
})
export class GetSetUserService {

  constructor() { }

  public setUser(user: UserModel): void {
    const stringifiedValue = JSON.stringify(user)
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, stringifiedValue)
  }

  public getUser(): UserModel {
    const userDataFromLS = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
    const parsedValue = userDataFromLS !== null ? JSON.parse(userDataFromLS) : -1;
    return parsedValue;
  }
}
