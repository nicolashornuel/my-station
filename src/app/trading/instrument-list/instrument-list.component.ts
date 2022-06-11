import {Component, OnInit} from '@angular/core';
import {of, switchMap, takeUntil} from 'rxjs';
import {ColumnSet} from 'src/app/model/column-set.model';
import {TableSet} from 'src/app/model/table-set.model';
import {ButtonComponent} from 'src/app/shared/button/button.component';
import {DestroyService} from 'src/app/shared/service/destroy.service';
import {UtilService} from 'src/app/shared/service/util.service';
import {FxcmOffer} from '../models/fxcm-offer.interface';
import {FxcmService} from '../service/fxcm.service';

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.scss']
})
export class InstrumentListComponent implements OnInit {
  public instruments: any = {};
  public keyOffers: string[] = [];
  public offers!: FxcmOffer[];
  public tableSet: TableSet = {
    verticaltextHeader: true,
    openDetailByClickRow: (row: any) => `/trading/${row.currency.replace('/', '')}`
  };
  public columns: ColumnSet[] = [
    {
      key: 'buy',
      title: 'buy',
      type: 'number'
    },
    {
      key: 'buyTradable',
      title: 'buyTradable',
      type: 'boolean'
    },
    {
      key: 'currency',
      title: 'currency',
      type: 'string'
    },
    {
      key: 'defaultSortOrder',
      title: 'defaultSortOrder',
      type: 'number'
    },
    {
      key: 'emr',
      title: 'emr',
      type: 'number'
    },
    {
      key: 'fractionDigits',
      title: 'fractionDigits',
      type: 'number'
    },
    {
      key: 'high',
      title: 'high',
      type: 'number'
    },
    {
      key: 'instrBaseUnitSize',
      title: 'instrBaseUnitSize',
      type: 'number'
    },
    {
      key: 'instrumentType',
      title: 'instrumentType',
      type: 'number'
    },
    {
      key: 'lmr',
      title: 'lmr',
      type: 'number'
    },
    {
      key: 'low',
      title: 'low',
      type: 'number'
    },
    {
      key: 'maxQuantity',
      title: 'maxQuantity',
      type: 'number'
    },
    {
      key: 'minQuantity',
      title: 'minQuantity',
      type: 'number'
    },
    {
      key: 'mmr',
      title: 'mmr',
      type: 'number'
    },
    {
      key: 'offerId',
      title: 'offerId',
      type: 'number'
    },
    {
      key: 'pip',
      title: 'pip',
      type: 'number'
    },
    {
      key: 'pipCost',
      title: 'pipCost',
      type: 'number'
    },
    {
      key: 'pipFraction',
      title: 'pipFraction',
      type: 'number'
    },
    {
      key: 'ratePrecision',
      title: 'ratePrecision',
      type: 'number'
    },
    {
      key: 'rollB',
      title: 'rollB',
      type: 'number'
    },
    {
      key: 'rollS',
      title: 'rollS',
      type: 'number'
    },
    {
      key: 'sell',
      title: 'sell',
      type: 'number'
    },
    {
      key: 'sellTradable',
      title: 'sellTradable',
      type: 'boolean'
    },
    {
      key: 'spread',
      title: 'spread',
      type: 'number'
    },
    {
      key: 't',
      title: 't',
      type: 'number'
    },
    {
      key: 'time',
      title: 'time',
      type: 'string',
      valuePrepare: (value: string) => this.util.getDate(value)
    },
    {
      key: 'valueDate',
      title: 'valueDate',
      type: 'custom',
      valuePrepare: (value: string) => {
        return {link: `/list`, value};
      },
      renderComponent: ButtonComponent
    },
    {
      key: 'volume',
      title: 'volume',
      type: 'number'
    }
  ];

  constructor(private fxcmService: FxcmService, private destroy$: DestroyService, private util: UtilService) {}

  ngOnInit(): void {
    this.getModel();
  }

  private getInstruments(): void {
    const req = {method: 'GET', resource: '/trading/get_instruments'};
    const transformData = (res: any) => {
      this.instruments = res.data.instrument
        .filter((instru: {visible: boolean}) => instru.visible)
        .map((item: {symbol: string; order: string}) => {
          return {symbol: item.symbol, order: item.order};
        });
      console.log(this.instruments);
    };
    this.callService(req, transformData);
  }

  private getModel(): void {
    const req = {
      method: 'GET',
      resource: '/trading/get_model',
      params: {
        models: [
          'Offer',
          'OpenPosition',
          'ClosedPosition',
          'Order',
          'Account',
          'Summary',
          'LeverageProfile',
          'Properties'
        ]
      }
    };
    const transformData = (res: any) => {
      this.offers = res.offers.filter((offer: {instrumentType: number}) => offer.instrumentType > 0);
      this.keyOffers = Object.keys(this.offers[0]);
    };
    this.callService(req, transformData);
  }

  private callService(req: any, callback: (res: any) => void): void {
    this.fxcmService.getSocket$
      .pipe(
        switchMap(isConnected =>
          isConnected ? this.fxcmService.requestProcessor(req) : this.fxcmService.authenticate()
        ),
        takeUntil(this.destroy$)
      )
      .subscribe(res => (res ? callback(res) : null));
  }
}
