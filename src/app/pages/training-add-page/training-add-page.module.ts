import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingAddPageRoutingModule } from './training-add-page-routing.module';
import { TrainingAddPageComponent } from './training-add-page.component';

@NgModule({
  declarations: [TrainingAddPageComponent],
  imports: [CommonModule, TrainingAddPageRoutingModule],
})
export class TrainingAddPageModule {}
