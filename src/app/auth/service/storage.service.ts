import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  isStorageAvailable() {
    return typeof Storage !== 'undefined';
  }

  setSessionItem(key: string, value: any): boolean {
    if (this.isStorageAvailable() && window.sessionStorage) {
      window.sessionStorage.setItem(key, value);
      return true;
    }
    return false;
  }

  setLocalItem(key: string, value: any): boolean {
    if (this.isStorageAvailable() && window.localStorage) {
      window.localStorage.setItem(key, value);
      return true;
    }
    return false;
  }

  getSessionItem(key: string) {
    if (this.isStorageAvailable() && window.sessionStorage) {
      let value = window.sessionStorage.getItem(key);
      return value;
    }
    return null;
  }

  getLocalItem(key: string) {
    if (this.isStorageAvailable() && window.localStorage) {
      let value = window.localStorage.getItem(key);
      return value;
    }
    return null;
  }

  removeSessionItem(key: string) {
    if (this.isStorageAvailable() && window.sessionStorage) {
      window.sessionStorage.removeItem(key);
      return true;
    }
    return false;
  }

  removeLocalItem(key: string) {
    if (this.isStorageAvailable() && window.localStorage) {
      window.localStorage.removeItem(key);
      return true;
    }
    return false;
  }

  clearLocalStorage() {
    if (this.isStorageAvailable() && window.localStorage) {
      window.localStorage.clear();
      return true;
    }
    return false;
  }
}
