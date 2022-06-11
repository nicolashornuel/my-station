import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {of, switchMap, takeUntil} from 'rxjs';
import {DestroyService} from 'src/app/shared/service/destroy.service';
import {FxcmService} from '../service/fxcm.service';
import { WidgetAnalysisComponent } from '../widget-analysis/widget-analysis.component';
import { WidgetForexHeatMapComponent } from '../widget-forex-heat-map/widget-forex-heat-map.component';

@Component({
  selector: 'app-instrument-detail',
  templateUrl: './instrument-detail.component.html',
  styleUrls: ['./instrument-detail.component.scss']
})
export class InstrumentDetailComponent implements OnInit {
  public symbolSelected!: string;
  public tabs = [
      {
        title: 'Analysis',
        color: '#436ff3',
        width: '370px',
        marginTop: '-150px',
        renderComponent: WidgetAnalysisComponent,
      },
      {
        title: 'Forex Heat Map',
        color: 'pink',
        width: 'calc(770px * 0.75 + 72px + 40px + 30px)',
        marginTop: '150px',
        renderComponent: WidgetForexHeatMapComponent,
      }
  ]

  public indexTab!: number;

  constructor(private route: ActivatedRoute, private fxcmService: FxcmService, private destroy$: DestroyService) {}

  ngOnInit(): void {
    this.route.params.subscribe((p: Params) => {
      this.symbolSelected = `FX:${p['currency']}`;
      //this.update();
    });
  }

  private update(): void {
    const req = {
      method: 'POST',
      resource: '/subscribe',
      params: {
        pairs: "EUR/USD" //["EUR/USD","GBP/USD","USD/JPY"]
        //models: 'Offer' //["Offer","Order"]
      }
    };
    const req2 = {
      method: 'POST',
      resource: '/trading/update_subscriptions',
      params: {
        symbol: 'GBP/USD',
        visible: true
      }
    };
    this.fxcmService.getSocket$
      .pipe(
        switchMap(isConnected =>
          isConnected ? this.fxcmService.requestProcessor(req) : this.fxcmService.authenticate()
        ),
        takeUntil(this.destroy$)
      )
      .subscribe(res => {
        res && res.response.executed ? this.callback() : null;
      });
  }

  private callback(): void {
    this.fxcmService.subUpdate('GBP/USD');
  }

  public openTab(index: number): void {
    this.indexTab = index;
  }

}
