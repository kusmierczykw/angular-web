import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutsModule } from '@layouts/layouts.module';
import { STORAGE_TOKEN } from '@core/storage/tokens/storage.token';
import { LocalStorageService } from '@core/storage/services/local-storage.service';
import { ANGULAR_DATE_LOCALE_CONFIG_TOKEN } from '@core/locale/date/angular-date-locale-config-token';
import { AngularDateLocaleDefaultConfig } from '@core/locale/date/angular-date-locale-default-config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutsModule,
  ],
  providers: [
    {
      provide: ANGULAR_DATE_LOCALE_CONFIG_TOKEN,
      useValue: AngularDateLocaleDefaultConfig,
    },
    {
      provide: STORAGE_TOKEN,
      useClass: LocalStorageService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
