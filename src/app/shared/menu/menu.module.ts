import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '@shared/menu/components';
import { IconsModule } from '@core/icons/icons.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, IconsModule, RouterModule, MatButtonModule],
  exports: [MenuComponent],
})
export class MenuModule {}
