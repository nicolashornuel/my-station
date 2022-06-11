import { Component, Input, OnInit } from '@angular/core';
import { SymbolType } from '../models/symbol.enum';
import { IntervalType } from '../models/tv-analysis.interface';

@Component({
  selector: 'app-widget-analysis',
  templateUrl: './widget-analysis.component.html',
  styleUrls: ['./widget-analysis.component.scss']
})
export class WidgetAnalysisComponent implements OnInit {

  @Input()
  public symbolSelected = SymbolType.EURUSD;
  public symbols: string[] = Object.values(SymbolType);
  public intervals: string[] = Object.values(IntervalType);

  constructor() { }

  ngOnInit(): void {
  }

}
