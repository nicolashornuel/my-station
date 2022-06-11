import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstrumentDetailComponent } from './instrument-detail/instrument-detail.component';
import { InstrumentListComponent } from './instrument-list/instrument-list.component';
import { WidgetChartComponent } from './widget-chart/widget-chart.component';

const routes: Routes = [
  { path: '', component: InstrumentListComponent},
  { path: ':currency', component: InstrumentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradingRoutingModule { }
