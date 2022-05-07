import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageRoutingModule } from './not-found-page-routing.module';
import { NotFoundPageComponent } from './not-found-page.component';
import { ImagesModule } from '@shared/images/images.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [
    CommonModule,
    NotFoundPageRoutingModule,
    ImagesModule,
    MatGridListModule,
    MatButtonModule,
  ],
})
export class NotFoundPageModule {}
