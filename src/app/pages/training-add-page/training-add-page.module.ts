import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingAddPageRoutingModule } from './training-add-page-routing.module';
import { TrainingAddPageComponent } from './training-add-page.component';
import { TrainingFormModule } from '@features/training/components/training-form';

@NgModule({
  declarations: [TrainingAddPageComponent],
  imports: [CommonModule, TrainingAddPageRoutingModule, TrainingFormModule],
})
export class TrainingAddPageModule {}
