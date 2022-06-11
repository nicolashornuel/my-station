import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { filter, map, takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/service/auth.service';
import { StorageService } from 'src/app/auth/service/storage.service';
import { DestroyService } from '../service/destroy.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items = [{ title: 'Log out' }];

  constructor(private nbMenuService: NbMenuService, private authService: AuthService,
    private destroy$: DestroyService,
    private storageService: StorageService,
    private sidebarService: NbSidebarService,
    private router: Router) { }

  ngOnInit(): void {
    this.getSelectedMenu()
  }

  /**
   * get selected menu
   *
   * @memberof HeaderComponent
   */
  getSelectedMenu() {
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'admin-context-menu'),
        map(({ item: { title } }) => title),
        takeUntil(this.destroy$)
      )
      .subscribe(title => {
        if (title === 'Log out') {
          this.authService.signOut().then(_response => {
            this.storageService.setLocalItem('isAdmin', false);
            this.router.navigate(['/sign-in']);
          }, error => {
            console.log(error)
          })
        }
      });
  }

  /**
   * togglesidebar
   *
   * @returns {boolean}
   * @memberof HeaderComponent
   */
  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

}
