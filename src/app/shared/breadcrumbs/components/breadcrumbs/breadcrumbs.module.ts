import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from '@core/icons/icons.module';
import { BreadcrumbVariablesSubstitutionPipe } from './pipes';

@NgModule({
  declarations: [BreadcrumbsComponent, BreadcrumbVariablesSubstitutionPipe],
  exports: [BreadcrumbsComponent],
  imports: [CommonModule, RouterModule, IconsModule],
})
export class BreadcrumbsModule {}
