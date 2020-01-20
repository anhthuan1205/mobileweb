import { Injectable } from '@angular/core';

const BANK_ID = 'bankId';
const USER_NAME = 'name';
const USER_NATIONAL_ID = 'nationalId';
const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  constructor() { }

  public saveBankId(id: string) {
    window.sessionStorage.removeItem(BANK_ID);
    window.sessionStorage.setItem(BANK_ID, id);
  }

  public getBankId() {
    return window.sessionStorage.getItem(BANK_ID);
  }

  public saveInfoName(name: string) {
    window.sessionStorage.removeItem(USER_NAME);
    window.sessionStorage.setItem(USER_NAME, name);
  }

  public saveInfoNationalId(nationalId: string) {
    window.sessionStorage.removeItem(USER_NATIONAL_ID);
    window.sessionStorage.setItem(USER_NATIONAL_ID, nationalId);
  }

  public getInfoName() {
    return window.sessionStorage.getItem(USER_NAME);
  }

  public getInfoNationalId() {
    return window.sessionStorage.getItem(USER_NATIONAL_ID);
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }
}
