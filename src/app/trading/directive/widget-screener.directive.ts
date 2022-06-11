import {Directive, ElementRef, Renderer2} from '@angular/core';
import {DefaultColumnType, DefaultScreenType, MarketType, TvScreener} from '../models/tv-screener.interface';
import {ScriptService} from '../service/script.service';

@Directive({
  selector: '[appWidgetScreener]'
})
export class WidgetScreenerDirective {
  //https://fr.tradingview.com/widget/screener/
  public name: string = 'Screener';
  private SCRIPT_PATH: string = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
  public options: TvScreener = {
    market: MarketType.FOREX,
    locale: 'fr',
    defaultColumn: DefaultColumnType.GLOBAL, // GLOBAL = 'overview'
    defaultScreen: DefaultScreenType.GENERAL,
    showToolbar: true, // Afficher la barre d'outils supérieure
    colorTheme: 'light', // "dark" | "light",
    isTransparent: false,
    width: '1100', // 100% or 1100,
    height: '523' // 100% or 523,
  };
  public scriptElt!: HTMLScriptElement;

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
    this.scriptElt = this.scriptService.loadJsScriptEmbed(scriptElt);
  }
}
