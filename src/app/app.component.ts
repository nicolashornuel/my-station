import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from './auth/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn$!: Observable<boolean>;

  constructor(private readonly authService: AuthService) {}

  /**
   * Init
   */
  ngOnInit() {
    this.authService.checkIsAdmin();
    this.isLoggedIn$ = this.authService.getUserLoggedIn$;
  }
}
