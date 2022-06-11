import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TradingRoutingModule } from './trading-routing.module';
import { WidgetChartComponent } from './widget-chart/widget-chart.component';
import { InstrumentDetailComponent } from './instrument-detail/instrument-detail.component';
import { InstrumentListComponent } from './instrument-list/instrument-list.component';
import { SharedModule } from '../shared/shared.module';
import { WidgetAnalysisDirective } from './directive/widget-analysis.directive';
import { WidgetScreenerDirective } from './directive/widget-screener.directive';
import { WidgetForexHeatMapDirective } from './directive/widget-forex-heat-map.directive';
import { RightBarComponent } from './right-bar/right-bar.component';
import { WidgetAnalysisComponent } from './widget-analysis/widget-analysis.component';
import { WidgetForexHeatMapComponent } from './widget-forex-heat-map/widget-forex-heat-map.component';



@NgModule({
  declarations: [
    WidgetChartComponent,
    InstrumentDetailComponent,
    InstrumentListComponent,
    WidgetAnalysisDirective,
    WidgetScreenerDirective,
    WidgetForexHeatMapDirective,
    RightBarComponent,
    WidgetAnalysisComponent,
    WidgetForexHeatMapComponent
  ],
  imports: [
    CommonModule,
    TradingRoutingModule,
    SharedModule
  ]
})
export class TradingModule { }
