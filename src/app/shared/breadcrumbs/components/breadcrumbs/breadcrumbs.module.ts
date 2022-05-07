import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { IconModule } from '@shared/icons/icon.module';
import { TextVariablesModule } from '@shared/text-variables/text-variables.module';

@NgModule({
  declarations: [BreadcrumbsComponent],
  exports: [BreadcrumbsComponent],
  imports: [CommonModule, RouterModule, IconModule, TextVariablesModule],
})
export class BreadcrumbsModule {}
