import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ScriptService } from '../service/script.service';

declare let TradingView: any;

@Component({
  selector: 'app-widget-chart',
  templateUrl: './widget-chart.component.html',
  styleUrls: ['./widget-chart.component.scss']
})
export class WidgetChartComponent implements OnInit {
  //https://fr.tradingview.com/widget/advanced-chart/
  private name: string = 'Chart';
  private SCRIPT_PATH: string = 'https://s3.tradingview.com/tv.js';
  public options = {
    width: 980, //980
    height: 610, //610
    //autosize: true,
    symbol: 'FX:EURUSD',
    interval: 'D',
    timezone: 'Europe/Brussels',
    theme: 'light', //dark
    style: '1',
    locale: 'fr',
    toolbar_bg: '#f1f3f6',
    enable_publishing: false,
    allow_symbol_change: true,
    save_image: false,
    container_id: 'tradingview_e655f'
  };
  @Input() symbolSelected!: string;

  constructor(private scriptService: ScriptService) {}

  ngOnInit(): void {
    this.displayWidget();
    this.options.symbol = this.symbolSelected;
    this.options.height = window.innerHeight - 178;
    this.options.width = window.innerWidth - 178;
  }


  /**
   *
   *
   * @private
   * @memberof WidgetChartComponent
   */
  private displayWidget() {
    const scriptElement = this.scriptService.loadJsScript(this.SCRIPT_PATH);
    scriptElement.onload = () => {
      console.log(`Tradingview ${this.name} Script loaded`);
      new TradingView.widget(this.options);
    };
    scriptElement.onerror = () => {
      console.log(`Could not load the Tradingview ${this.name} Script!`);
    };
  }
}
