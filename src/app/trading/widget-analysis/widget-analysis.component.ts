import {Component, OnInit} from '@angular/core';
import {ScriptService} from '../service/script.service';

@Component({
  selector: 'app-widget-analysis',
  templateUrl: './widget-analysis.component.html',
  styleUrls: ['./widget-analysis.component.scss']
})
export class WidgetAnalysisComponent implements OnInit {
  //https://fr.tradingview.com/widget/technical-analysis/
  private name: string = 'Analysis';
  private SCRIPT_PATH: string = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
  public options = {
    interval: '1m',
    width: 425,
    isTransparent: false,
    height: 450,
    symbol: 'NASDAQ:AAPL',
    showIntervalTabs: true,
    locale: 'fr',
    colorTheme: 'light'
  };

  constructor(private scriptService: ScriptService) {}

  ngOnInit(): void {
    this.displayWidget();
  }

  /**
   *
   *
   * @private
   * @memberof WidgetAnalysisComponent
   */
  private displayWidget() {
    const scriptElement = this.scriptService.loadJsScriptEmbed(this.SCRIPT_PATH, this.options);
    scriptElement.onload = () => {
      console.log(`Tradingview ${this.name} Script loaded`);
    };
    scriptElement.onerror = () => {
      console.log(`Could not load the Tradingview ${this.name} Script!`);
    };
  }
}
