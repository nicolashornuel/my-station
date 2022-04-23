import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { FxcmService } from './trading/service/fxcm.service';
import { TradingModule } from './trading/trading.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    TradingModule
  ],
  providers: [FxcmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
