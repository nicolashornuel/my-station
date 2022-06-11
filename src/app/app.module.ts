import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbSidebarModule } from '@nebular/theme';
import { environment } from '../environments/environment';
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
    TradingModule,
    HttpClientModule,
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    //provideAuth(() => getAuth()),
    //provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    NbSidebarModule.forRoot()
  ],
  providers: [FxcmService,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
