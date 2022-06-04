import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { IconModule } from '@shared/icons/icon.module';
import { ValuesSubstitutionModule } from '@shared/values-substitution/values-substitution.module';

@NgModule({
  declarations: [BreadcrumbsComponent],
  exports: [BreadcrumbsComponent],
  imports: [CommonModule, RouterModule, IconModule, ValuesSubstitutionModule],
})
export class BreadcrumbsModule {}
