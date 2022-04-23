import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { io } from 'socket.io-client';
import * as qs from 'query-string'

@Injectable({
  providedIn: 'root'
})
export class FxcmService {

  private socket: any;
  
  constructor() { }
}
