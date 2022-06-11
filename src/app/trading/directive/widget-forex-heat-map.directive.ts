import {Directive, ElementRef, Renderer2} from '@angular/core';
import { CurrenciesType, TvForexHeatMap } from '../models/tv-forex-heat-map.interface';
import {ScriptService} from '../service/script.service';

@Directive({
  selector: '[appWidgetForexHeatMap]'
})
export class WidgetForexHeatMapDirective {
  //https://fr.tradingview.com/widget/forex-heat-map/
  public name: string = 'ForexHeatMap';
  private SCRIPT_PATH: string = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js';
  public options: TvForexHeatMap = {
    width: 770, //770
    height: 400, //400
    currencies: Object.values(CurrenciesType),
    isTransparent: false,
    colorTheme: 'light',
    locale: 'fr'
  };

  constructor(el: ElementRef, private scriptService: ScriptService, private render: Renderer2) {
    this.displayWidget(el);
  }

  private displayWidget(el: ElementRef) {
    this.render.setStyle(el.nativeElement, 'color', 'red');
    const scriptElt = {
      src: this.SCRIPT_PATH,
      text: this.options,
      parentElt: el,
      name: this.name
    };
    this.scriptService.loadJsScriptEmbed(scriptElt);
  }
}
