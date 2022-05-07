import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@shared/icons/icon.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MenuItemComponent } from '@shared/menu/components/menu-item/menu-item.component';
import { OnlyVisibleMenuItemsPipe } from '@shared/menu/pipes/only-visible-menu-items.pipe';

@NgModule({
  declarations: [MenuItemComponent, OnlyVisibleMenuItemsPipe],
  imports: [
    CommonModule,
    IconModule,
    RouterModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  exports: [MenuItemComponent, OnlyVisibleMenuItemsPipe],
})
export class MenuModule {}
