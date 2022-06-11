import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'query-string';
import { BehaviorSubject, Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { io, Socket } from 'socket.io-client';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FxcmService {
  private socket!: Socket;
  private fxcmUrl: string = environment.fxcm.url;
  private fxcmToken: string = environment.fxcm.token;
  public reqHeader = new HttpHeaders({});
  private readonly socket$ = new Subject<any>();
  private readonly socketConnect$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  public requestProcessor(req: any): Observable<any> {
    let url = this.fxcmUrl + req.resource;
    let body = null;
    let param = stringify(req.params);
    //req.method === 'GET' ? (url += `/?${stringify(req.params)}`) : (body = req.params); 
    req.method === 'GET' ? (url += `/?${param}`) : (body = param); 
    return this.http.request(req.method, url, {headers: this.reqHeader, body});
  }

  public authenticate(): Observable<boolean> {
    this.socket = io(this.fxcmUrl, {query: {access_token: this.fxcmToken}});
    // fired when socket.io connects with no errors
    this.socket.on('connect', () => {
      console.log('Socket.IO session has been opened: ', this.socket.id);
      this.reqHeader = new HttpHeaders({
        //'User-Agent': 'request',
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${this.socket.id + this.fxcmToken}`,
      });
      this.socketConnect$.next(true);
    });
    // fired when socket.io cannot connect (network errors)
    this.socket.on('connect_error', error => {
      console.log('Socket.IO session connect error: ', error);
      this.socketConnect$.next(false);
    });
    // fired when socket.io cannot connect (login errors)
    this.socket.on('error', error => {
      console.log('Socket.IO session error: ', error);
      this.socketConnect$.next(false);
    });
    // fired when socket.io disconnects from the server
    this.socket.on('disconnect', () => {
      console.log('Socket disconnected, terminating client.');
      this.socketConnect$.next(false);
    });
    return this.getSocket$;
  }

  public get getSocket$(): Observable<boolean> {
    return this.socketConnect$.asObservable();
  }

  public subUpdate(param: string): void {
    console.log(param)
    this.socket.on(param, update => {
      var jsonData = JSON.parse(update);
		//console.log(`Table update: ${JSON.stringify(jsonData)}`);
    });
  }

}
