import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidebookPageComponent } from '@pages/guidebook-page/guidebook-page.component';

const routes: Routes = [
  {
    path: '',
    component: GuidebookPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuidebookPageRoutingModule {}
