import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsPageRoutingModule } from './trainings-page-routing.module';
import { TrainingsPageComponent } from './trainings-page.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterLinkModule } from '@core/routing/pipes/router-link';

@NgModule({
  declarations: [TrainingsPageComponent],
  imports: [
    CommonModule,
    TrainingsPageRoutingModule,
    MatButtonModule,
    RouterLinkModule,
  ],
})
export class TrainingsPageModule {}
