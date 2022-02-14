import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuidebookPageRoutingModule } from './guidebook-page-routing.module';
import { GuidebookPageComponent } from './guidebook-page.component';
import { GuidebookModule } from '@guidebook/guidebook.module';

@NgModule({
  declarations: [GuidebookPageComponent],
  imports: [CommonModule, GuidebookPageRoutingModule, GuidebookModule],
})
export class GuidebookPageModule {}
