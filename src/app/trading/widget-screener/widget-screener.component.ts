import {Component, OnInit} from '@angular/core';
import {ScriptService} from '../service/script.service';

@Component({
  selector: 'app-widget-screener',
  templateUrl: './widget-screener.component.html',
  styleUrls: ['./widget-screener.component.scss']
})
export class WidgetScreenerComponent implements OnInit {
  //https://fr.tradingview.com/widget/screener/
  private name: string = 'Screener';
  private SCRIPT_PATH: string = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
  public options = {
    width: '100%',
    height: '400px',
    defaultColumn: 'overview',
    defaultScreen: 'general',
    market: 'forex',
    showToolbar: true,
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
   * @memberof WidgetScreenerComponent
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
