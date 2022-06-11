import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbMenuService, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(
    private menuService: NbMenuService,
    private sidebarService: NbSidebarService
  ) {}

  /**
   * INIT behavior for sidebar : compact onclick item menu
   * @memberof SidebarComponent
   */
  ngOnInit(): void {
    this.menuService
      .onItemClick()
      .subscribe(() => this.sidebarService.compact('menu-sidebar'));
  }

  public items: NbMenuItem[] = [
    {
      title: 'fxcm list instrus',
      icon: 'keypad-outline',
      link: '/trading'
    },
    {
      title: 'settings',
      icon: 'settings-outline',
      link: '/settings',
      home: true
    },
    {
      title: 'Giveaway',
      icon: 'gift-outline',
      link: '/trading',
      expanded: true
    },

  ];

}
