import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NebularModule } from './nebular/nebular.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';
import { TableCellComponent } from './table-cell/table-cell.component';
import { ButtonComponent } from './button/button.component';
import { CellHostDirective } from './directive/cell-host.directive';
import {RouterModule} from '@angular/router';

const myComponents = [
  HeaderComponent, SidebarComponent, TableComponent, TableCellComponent
];

@NgModule({
  declarations: [myComponents, ButtonComponent, CellHostDirective],
  imports: [
    CommonModule,
    NebularModule,
    RouterModule
  ],
  exports: [
    NebularModule,
    myComponents
  ]
})
export class SharedModule { }
