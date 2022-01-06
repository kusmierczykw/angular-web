import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-footer',
  templateUrl: './dashboard-footer.component.html',
  styleUrls: ['./dashboard-footer.component.scss'],
})
export class DashboardFooterComponent {
  public get year(): number {
    const today = new Date();
    
    return today.getFullYear();
  }
}
