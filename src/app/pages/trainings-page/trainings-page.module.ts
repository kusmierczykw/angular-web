import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsPageRoutingModule } from './trainings-page-routing.module';
import { TrainingsPageComponent } from './trainings-page.component';

@NgModule({
  declarations: [TrainingsPageComponent],
  imports: [CommonModule, TrainingsPageRoutingModule],
})
export class TrainingsPageModule {}
