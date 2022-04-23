import {Component, OnInit} from '@angular/core';
import {ScriptService} from '../service/script.service';

@Component({
  selector: 'app-widget-forex-heat',
  templateUrl: './widget-forex-heat.component.html',
  styleUrls: ['./widget-forex-heat.component.scss']
})
export class WidgetForexHeatComponent implements OnInit {
  //https://fr.tradingview.com/widget/forex-heat-map/
  private name: string = 'ForexHeatMap';
  private SCRIPT_PATH: string = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js';
  public options = {
    width: 770,
    height: 400,
    currencies: ['EUR', 'USD', 'JPY', 'GBP', 'CHF', 'AUD', 'CAD', 'NZD', 'CNY', 'TRY', 'SEK'],
    isTransparent: false,
    colorTheme: 'light',
    locale: 'fr'
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
