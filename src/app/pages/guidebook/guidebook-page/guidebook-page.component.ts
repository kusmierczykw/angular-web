import { Component } from '@angular/core';
import { GuidebookModule } from '@guidebook/guidebook.module';

@Component({
  selector: 'app-guidebook-page',
  templateUrl: './guidebook-page.component.html',
  styleUrls: ['./guidebook-page.component.scss'],
  standalone: true,
  imports: [GuidebookModule],
})
export class GuidebookPageComponent {}
