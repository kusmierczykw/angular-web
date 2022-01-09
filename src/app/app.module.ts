import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { IconsModule } from '@core/icons/icons.module';
import { LayoutsModule } from '@layouts/layouts.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutsModule,
    MatButtonModule,
    IconsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
