import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetChartComponent } from './widget-chart/widget-chart.component';

const routes: Routes = [
  { path: '**', component: WidgetChartComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradingRoutingModule { }
