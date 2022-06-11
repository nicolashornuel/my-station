import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {takeUntil} from 'rxjs';
import {DestroyService} from 'src/app/shared/service/destroy.service';
import {SymbolType} from 'src/app/trading/models/symbol.enum';
import {TradingService} from '../service/trading.service';

export interface Instrument {
  id?: string;
  fxcmName: string;
  isUsable: boolean;
  tradingViewName?: string;
}

@Component({
  selector: 'app-trading',
  templateUrl: './trading.component.html',
  styleUrls: ['./trading.component.scss']
})
export class TradingComponent implements OnInit {
  @ViewChild('form') ngForm!: NgForm;
  public instruments!: Instrument[];
  public isLoading: boolean = false;

  constructor(private tradingService: TradingService, private destroy$: DestroyService) {}

  ngOnInit(): void {
    this.getAll();
  }

  /**
   * ALLOW TO initialize data with enum
   *
   * @private
   * @memberof TradingComponent
   */
  private initializeData(): void {
    this.instruments = [];
    const symbols: string[] = Object.values(SymbolType);
    symbols.forEach((symbol: string) => {
      const instrument: Instrument = {
        fxcmName: symbol,
        isUsable: true
      };
      this.instruments.push(instrument);
    });
  }

  /**
   * GET ALL instrument object
   *
   * @private
   * @memberof TradingComponent
   */
  private getAll(): void {
    this.tradingService
      .getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe((instruments: Instrument[]) => {
        this.instruments = this.sort(instruments);
      });
  }


  /**
   * SORT BY NAME DESC
   *
   * @private
   * @param {Instrument[]} instruments
   * @return {*}  {Instrument[]}
   * @memberof TradingComponent
   */
  private sort(instruments: Instrument[]): Instrument[] {
    return instruments.sort((a, b) => {
      if (b.fxcmName > a.fxcmName) {
        return -1;
      } else if (b.fxcmName < a.fxcmName) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  /**
   * SAVE TO DATABASE 
   *
   * @memberof TradingComponent
   */
  public save(): void {
    this.instruments.forEach((instrument: Instrument) => {
      this.isLoading = true;
      this.tradingService.saveOne(instrument).then(() => (this.isLoading = false));
    });
  }
}
