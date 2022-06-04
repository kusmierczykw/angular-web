import { Component } from '@angular/core';
import { PatientsListModule } from '@modules/patient/components/patients-list/patients-list.module';

@Component({
  selector: 'app-patients-page',
  templateUrl: './patients-page.component.html',
  styleUrls: ['./patients-page.component.scss'],
  standalone: true,
  imports: [PatientsListModule],
})
export class PatientsPageComponent {}
