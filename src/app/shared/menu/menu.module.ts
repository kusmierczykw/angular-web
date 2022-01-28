import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from '@shared/menu/components';
import { IconsModule } from '@core/icons/icons.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OnlyVisibleMenuItemsPipe } from '@shared/menu/pipes';

@NgModule({
  declarations: [MenuItemComponent, OnlyVisibleMenuItemsPipe],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  exports: [MenuItemComponent, OnlyVisibleMenuItemsPipe],
})
export class MenuModule {}
