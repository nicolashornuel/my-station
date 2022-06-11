import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { ToastService, toastStatusType } from 'src/app/shared/service/toast.service';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  public isLoading: boolean = false;

  public isLoggedIn$!: Observable<boolean>;

  constructor(private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly toastService: ToastService,
    private router: Router) { }

  ngOnInit(): void {
    this.checkUserStatus();
  }

  /**
   * check user status
   *
   * @memberof SignInComponent
   */
   checkUserStatus() {
    this.authService.
      getUserLoggedIn$.pipe(take(1)).subscribe(isLoggedIn => {
        if (isLoggedIn) {
          this.toastService.open('Signin Success', toastStatusType.SUCCESS);
          this.router.navigate(['/trading']);
        }
      })
  }

  /**
   * signin method
   *
   * @memberof SignInComponent
   */
  async signIn() {
    this.isLoading = true;
    const { email, password } = this.user;
    this.authService.signIn(email, password).then(
      (response) => { 
          this.userService.getUserProfile(response.user!.uid)
          .pipe(take(1))
          .subscribe( (res:User | null) => {
            if (res?.isAdmin) {
              this.authService.setAccessUser(true);
              this.toastService.open('Signin Success', toastStatusType.SUCCESS);
              this.router.navigate(['/trading']);
            } else {
              this.authService.setAccessUser(false);
              this.toastService.open('Access not authorized', toastStatusType.ERROR);
              this.isLoading = false;
            };
          })
      },
      (error) => {
        this.isLoading = false;
        this.toastService.open(error.message, toastStatusType.ERROR);
      },

    );
   
  }

  googleLogin() {
    this.authService.loginGoogle();
  }
}
