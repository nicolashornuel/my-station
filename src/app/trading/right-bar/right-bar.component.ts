import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.scss']
})
export class RightBarComponent implements OnInit {
  @Input() public symbolSelected!: string;
  @Input() public settings: any;
  @Input() public rightBarOpened: boolean = false;
  @Output() openEvent = new EventEmitter();

  @ViewChild('targetContainer', {read: ViewContainerRef}) targetContainer!: ViewContainerRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const viewRef: any = this.targetContainer.createComponent(this.settings.renderComponent);
    viewRef.instance.symbolSelected = this.symbolSelected;
  }

  public open(): void {
    this.rightBarOpened = !this.rightBarOpened ;
    this.openEvent.emit()
  }
}
