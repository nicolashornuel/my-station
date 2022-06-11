import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnSet } from 'src/app/model/column-set.model';
import { TableSet } from 'src/app/model/table-set.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tableSet!: TableSet;
  @Input() columns!: ColumnSet[];
  @Input() data!: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public openDetail(row: any): void {
    const detail = this.tableSet.openDetailByClickRow(row);
    this.router.navigateByUrl(detail)
  }

}
