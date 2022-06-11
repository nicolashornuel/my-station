import {DOCUMENT} from '@angular/common';
import {Inject, Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {
  private renderer: Renderer2;

  constructor(@Inject(DOCUMENT) private document: Document, private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  /**
   * Append the JS tag to the Document Body.
   *
   * @param {string} src
   * @return {*}  {HTMLScriptElement}
   * @memberof ScriptService
   */
  public loadJsScript(src: string): HTMLScriptElement {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this.renderer.appendChild(this.document.body, script);
    return script;
  }

  /**
   * Append the JS tag to the Document Body.
   *
   * @param {*} scriptElt
   * @return {*}  {HTMLScriptElement}
   * @memberof ScriptService
   */
  public loadJsScriptEmbed(scriptElt: any): HTMLScriptElement {
    let script: HTMLScriptElement = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = scriptElt.src;
    script.async = true;
    script.text = JSON.stringify(scriptElt.text);
    this.renderer.appendChild(scriptElt.parentElt.nativeElement, script);
    script.onload = () => {
      console.log(`Tradingview ${scriptElt.name} Script loaded`);
    };
    script.onerror = () => {
      console.log(`Could not load the Tradingview ${scriptElt.name} Script!`);
    };
    return script;
  }
}
