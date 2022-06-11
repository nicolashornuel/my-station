import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  getDate(timestamp: any) {
    const dateObj = new Date(timestamp);
    return dateObj.getDate().toLocaleString('fr-FR');
  }
}
