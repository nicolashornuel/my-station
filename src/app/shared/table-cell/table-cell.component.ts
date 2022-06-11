import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, QueryList, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CellHostDirective } from '../directive/cell-host.directive';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.scss']
})
export class TableCellComponent implements OnInit, AfterViewInit {

  @Input() viewValue?: any;
  @Input() data?: any;
  @Input() settings?: any;
  //@ViewChild(CellHostDirective, {static: true}) cellHost!: CellHostDirective;
  @ViewChild('custom', {read: ViewContainerRef}) cellHost?: ViewContainerRef;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.settings && this.settings.renderComponent) {
      this.loadComponent();      
    }
  }

  loadComponent() {
    /* const viewContainerRef = this.cellHost.viewContainerRef;
    const componentRef = viewContainerRef.createComponent<any>(this.settings.renderComponent);
    componentRef.instance.data = this.settings.valuePrepare(this.data); */
    const componentRef = this.cellHost?.createComponent<any>(this.settings.renderComponent);
    componentRef!.instance.data = this.settings.valuePrepare(this.data);
  }





}
