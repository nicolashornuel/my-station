import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, switchMap, take} from 'rxjs';
import {StorageService} from './storage.service';

import {User} from 'src/app/model/user.model';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {ToastService, toastStatusType} from 'src/app/shared/service/toast.service';
import {UserService} from './user.service';
import {GoogleAuthProvider} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(
    public readonly afAuth: AngularFireAuth,
    private readonly storageService: StorageService,
    private readonly toastService: ToastService,
    private readonly userService: UserService
  ) {}

  /**
   * signin
   *
   * @param {string} email
   * @param {string} password
   * @return {*}  {Promise<any>}
   * @memberof AuthService
   */
  async signIn(email: string, password: string): Promise<any> {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  /**
   * signout
   *
   * @return {*}  {Promise<void>}
   * @memberof AuthService
   */
  async signOut(): Promise<void> {
    this.isLoggedIn$.next(false);
    return this.afAuth.signOut();
  }

  /**
   * GETTER observable boolean isAdmin
   *
   * @readonly
   * @type {Observable<boolean>}
   * @memberof AuthService
   */
  public get getUserLoggedIn$(): Observable<boolean> {
    return this.isLoggedIn$.asObservable();
  }

  /**
   * SETTER boolean isAdmin inside observable AND localStorage
   *
   * @param {boolean} value
   * @memberof AuthService
   */
  public setAccessUser(value: boolean): void {
    this.isLoggedIn$.next(value);
    this.storageService.setLocalItem('isAdmin', value);
  }

  /**
   * isuser logged in
   *
   * @memberof AuthService
   */
  public checkIsAdmin(): void {
    let isAdmin = this.storageService.getLocalItem('isAdmin');
    if (isAdmin === 'true') {
      this.isLoggedIn$.next(true);
    } else {
      this.afAuth.authState
        .pipe(
          switchMap((authState: any) => {
            return this.userService.getUserProfile(authState!.uid).pipe(take(1));
          })
        )
        .subscribe((user: User | null) => {
          user?.isAdmin ? this.setAccessUser(true) : this.setAccessUser(false);
        });
    }
  }

  /**
   * Handles errors when trying to update email address
   *
   * @private
   * @param {*} error
   * @memberof AuthService
   */
  private handleError(error: any): void {
    if (error.code) {
      this.toastService.open(error.code, toastStatusType.ERROR);
    }
  }

  /**
   * Signs up with email and password
   *
   * @param {string} email
   * @param {string} password
   * @return {*}  {Promise<boolean>}
   * @memberof AuthService
   */
  async signupWithEmailAndPasswordEmail(email: string, password: string): Promise<boolean> {
    try {
      await this.afAuth.createUserWithEmailAndPassword(email, password);
      return Promise.resolve(true);
    } catch (error) {
      this.handleError(error);
      return Promise.reject(error);
    }
  }

  /**
   * Logs in with email and password
   *
   * @param {string} email
   * @param {string} password
   * @return {*}  {Promise<boolean>}
   * @memberof AuthService
   */
  async loginWithEmailAndPassword(email: string, password: string): Promise<boolean> {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      return Promise.resolve(true);
    } catch (error) {
      this.handleError(error);
      return Promise.reject(error);
    }
  }

  /**
   * Login using Google
   */
  async loginGoogle(): Promise<void> {
    try {
      const provider = new GoogleAuthProvider();
      await this.afAuth.signInWithRedirect(provider);
    } catch (error) {
      this.setAccessUser(false);
      this.handleError(error);
    }
  }

}
