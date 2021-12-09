import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from '@shared/menu/components';
import { IconsModule } from '@core/icons/icons.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [MenuItemComponent],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  exports: [MenuItemComponent],
})
export class MenuModule {}
