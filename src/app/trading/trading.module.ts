import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TradingRoutingModule } from './trading-routing.module';
import { WidgetChartComponent } from './widget-chart/widget-chart.component';
import { WidgetScreenerComponent } from './widget-screener/widget-screener.component';
import { WidgetAnalysisComponent } from './widget-analysis/widget-analysis.component';
import { WidgetForexHeatComponent } from './widget-forex-heat/widget-forex-heat.component';


@NgModule({
  declarations: [
    WidgetChartComponent,
    WidgetScreenerComponent,
    WidgetAnalysisComponent,
    WidgetForexHeatComponent
  ],
  imports: [
    CommonModule,
    TradingRoutingModule
  ]
})
export class TradingModule { }
