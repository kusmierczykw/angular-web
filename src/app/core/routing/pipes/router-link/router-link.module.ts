import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkPipe } from '@core/routing/pipes/router-link/router-link.pipe';

@NgModule({
  declarations: [RouterLinkPipe],
  imports: [CommonModule],
  exports: [RouterLinkPipe],
})
export class RouterLinkModule {}
