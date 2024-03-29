import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/auth/services/auth.service';
import { NavigationService } from '@core/routing/services/navigation.service';
import { RoutePath } from '@core/routing/paths/route-path';

@Component({
  selector: 'app-sign-out-page',
  templateUrl: './sign-out-page.component.html',
  styleUrls: ['./sign-out-page.component.scss'],
  standalone: true,
})
export class SignOutPageComponent implements OnInit {
  public constructor(
    private readonly auth: AuthService,
    private readonly navigate: NavigationService,
  ) {}

  public ngOnInit() {
    this.signOut();
  }

  private signOut(): void {
    this.auth.signOut().subscribe(() => this.navigateToSignInPage());
  }

  private navigateToSignInPage(): void {
    this.navigate.navigate(RoutePath.SIGN_IN);
  }
}
