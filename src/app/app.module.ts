import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutsModule } from '@layouts/layouts.module';
import { STORAGE_TOKEN } from '@core/storage/tokens/storage.token';
import { LocalStorageService } from '@core/storage/services/local-storage.service';

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
      provide: STORAGE_TOKEN,
      useClass: LocalStorageService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
