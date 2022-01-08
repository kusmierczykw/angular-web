import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonGuidebookComponent } from './button-guidebook/button-guidebook.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ButtonGuidebookComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [ButtonGuidebookComponent],
})
export class GuidebookModule {}
